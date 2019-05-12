//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

import * as vscode from 'vscode';
import * as changelogExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite('Extension Tests', function() {
  // Defines a Mocha unit test
  test('dummy test', function() {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });

  test('should return repository name and owner path', function() {
    const gitRepositoryLink = 'https://github.com/JCofman/Changelog';
    const expectedRepoNameAndOwnerPath = '/JCofman/Changelog';
    const actualRepoNameAndOwnerPath = changelogExtension.getRepositoryNameAndOwnerPath(
      gitRepositoryLink
    );
    assert.equal(actualRepoNameAndOwnerPath, expectedRepoNameAndOwnerPath);
  });

  // this ensure that the tooltip will be shown under the default tooltip
  test('should find package version and name from package.json document ', async function() {
    const packageNames = [
      ['@types/mocha', '5.2.6'],
      ['ts-loader', '6.0.0'],
      ['tslint', '5.16.0'],
      ['typescript', '3.4.5']
    ];
    const doc = await vscode.workspace
      .openTextDocument({
        language: 'json',
        content: `"@types/mocha": "^5.2.6",
        "ts-loader": "^6.0.0",
        "tslint": "^5.16.0",
        "typescript": "^3.4.5",`
      })
      .then(doc => {
        return doc;
      });

    packageNames.forEach((expectedPackageInfo, index) => {
      const position = new vscode.Position(index, 1);
      const packageInfo = changelogExtension.getHoveredPackageVersionAndName(
        doc,
        position
      );
      if (packageInfo === undefined) {
        assert.fail(
          `Should extract package name and version for following line ${
            doc.lineAt(position.line).text
          }`
        );
      } else {
        assert.equal(packageInfo[0], expectedPackageInfo[0]);
        assert.equal(packageInfo[1], expectedPackageInfo[1]);
      }
    });
  });
});
