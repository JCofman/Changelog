import * as vscode from 'vscode';
import axios from 'axios';
import * as semver from 'semver';

import { URL } from 'url';

/**
 * This function generates the hover content based on the fetched information.
 * If the currentPackageVersion is already the newest return false and don`t add any hover content.
 * @param currentPackageVersion
 * @param changelogLink
 * @param changelogData
 */
function createHoverInformationString(
  currentPackageVersion: string,
  changelogLink: string,
  changelogData: ContentsItem[]
) {
  if (currentPackageVersion) {
    let hoverInformation = new vscode.MarkdownString(
      `\n\n ### Changelog \n\n \n\n ${changelogLink} \n\n \n\n`
    );
    changelogData.some(changelogItem => {
      if (semver.lte(changelogItem.version, currentPackageVersion)) {
        return false;
      }

      hoverInformation = hoverInformation.appendMarkdown(
        `${changelogItem.version}\n ${changelogItem.body}\n\n`
      );
      return changelogItem.version === currentPackageVersion;
    });
    return hoverInformation;
  }
  return new vscode.MarkdownString(`No Changelog found`);
}

/**
 * fetches changelog data from https://changelogs.md/api
 * and returns a formatted version as a string. Prints error message on error.
 * @param githubNameAndOwnerPath
 * @param hoveredPackageVersion
 */
async function findChangeLog(
  githubNameAndOwnerPath: string,
  hoveredPackageVersion: string
) {
  var changelog: any;
  var hoverMessage: any;
  try {
    changelog = await axios.get(
      `https://changelogs.md/api/github${githubNameAndOwnerPath}`
    );

    hoverMessage = createHoverInformationString(
      hoveredPackageVersion,
      changelog.data.changelog &&
        `https://github.com/${githubNameAndOwnerPath}/blob/master/CHANGELOG.md`,
      changelog.data.contents
    );
    return hoverMessage;
  } catch (error) {
    changelog = await axios.get(
      `https://api.github.com/repos${githubNameAndOwnerPath}/releases`
    );
    if (changelog.status === 200 && changelog.data[0].body.length > 0) {
      const normalizedReleaseItems: ContentsItem[] = changelog.data.map(
        (release: GitHubReleases) => ({
          version: release.tag_name.substring(1),
          date: release.created_at,
          body: release.body
        })
      );
      hoverMessage = createHoverInformationString(
        hoveredPackageVersion,
        `https://github.com${githubNameAndOwnerPath}/releases`,
        normalizedReleaseItems
      );
      return hoverMessage;
    }
    return new vscode.MarkdownString(
      `Couldn't find a changelog something went wrong! Either we couldn't detect a changelog or the fetch request to the github api failed.`
    );
  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerHoverProvider({ pattern: '**/package.json' }, {
    async provideHover(document, position, token) {
      // 1. extract package which gets hovered
      const hoveredPackageJSONVersionAndName = getHoveredPackageVersionAndName(
        document,
        position
      );

      if (hoveredPackageJSONVersionAndName !== undefined) {
        const [
          hoveredPackageName,
          hoveredPackageVersion
        ] = hoveredPackageJSONVersionAndName;

        // 2. find the GitHub repository information to the package
        const githubRepoNameAndOwner = await collectGitHubRepoNameAndOwner(
          hoveredPackageName
        );

        // 3. find the changelog to the repository
        if (
          githubRepoNameAndOwner !== null &&
          githubRepoNameAndOwner !== undefined
        ) {
          const changelog = await findChangeLog(
            githubRepoNameAndOwner,
            hoveredPackageVersion
          );
          if (changelog !== undefined) {
            return new vscode.Hover(changelog);
          }
        }
      }
    }
  });
}

function getHoveredPackageVersionAndName(
  document: vscode.TextDocument,
  position: vscode.Position
): [string, string] | undefined {
  const lineText = document.lineAt(position.line).text;
  const packageName = lineText.match(/"[a-zA-Z-@]+"/);
  const packageVersion = lineText.match(/\d+.\d+.\d+/);

  if (
    packageName !== null &&
    packageVersion !== null &&
    packageName.length === 1 &&
    packageVersion.length === 1
  ) {
    return [
      packageName[0].replace(/"/g, ''),
      packageVersion[0].replace(/"/g, '')
    ];
  }
}

/**
 * Fetches the npms.io API and tries to collect the GitHub repo and owner
 * @param packageName
 */
async function collectGitHubRepoNameAndOwner(packageName: string) {
  // 1. check on appropriate string value
  if (packageName.length <= 0) {
    vscode.window.showErrorMessage(
      `Sorry the provided package name: ${packageName} is to short to search for it`
    );
  }
  // 2. fetch package information
  try {
    const packageInfo: NpmsIODataResponse = await axios.get(
      `https://api.npms.io/v2/package/${packageName}`
    );

    // 3. check whether a github repo link is available and extract the link
    if (
      packageInfo !== null &&
      packageInfo !== undefined &&
      packageInfo.data.collected.metadata.links.repository
    ) {
      const {
        repository: repositoryLink
      } = packageInfo.data.collected.metadata.links;
      const githubNameAndOwnerPath = getRepositoryNameAndOwnerPath(
        repositoryLink
      );
      return githubNameAndOwnerPath;
    }
  } catch (error) {
    vscode.window.showErrorMessage(
      `Couldn't find the npm package something went wrong! ${JSON.stringify(
        error.response.data.message
      )}`
    );
  }
}

/**
 * Extracts the path (Name and Owner) of the provided repository link.
 * @param repositoryLink
 */
export function getRepositoryNameAndOwnerPath(
  repositoryLink: string
): string | undefined {
  if (repositoryLink.length > 0) {
    const repoURL = new URL(repositoryLink);
    return repoURL.pathname;
  }
}
