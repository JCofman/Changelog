# Changelog README

## Affiliate

If you like to support my OSS work you could "buy me a coffee"

<a href="https://www.buymeacoffee.com/jcofman" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-yellow.png" alt="Buy Me A Coffee" width="201" height="51" ></a>

or want to take a look on tools I recommend you could checkout.
<table><tr><td align="center"><a href="https://a.paddle.com/v2/click/49831/106566?link=1947" target="_blank"><img src="https://img.stackshare.io/service/6882/687474703a2f2f692e696d6775722e636f6d2f446d6d4a56335a2e706e67.png" alt="Buy Me A Coffee" width="50" height="50" ><br /><sub><b>Sizzy</b></sub></a><br /> A super useful App when developing for different screens</a></td></tr></table>

## General

<p align="center">
    <img alt="changelog icon" src="https://user-images.githubusercontent.com/2118956/56217994-79ebbf80-6064-11e9-9b82-162b4d0dfa0b.png" width="300" />
</p>


This vscode extension tries to add changelog information to the hovered `package.json` package dependency.
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![Badge for version for Visual Studio Code extension JacobCofman.changelog](https://vsmarketplacebadge.apphb.com/version/JacobCofman.changelog.svg)](https://marketplace.visualstudio.com/items?itemName=JacobCofman.changelog)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/JacobCofman.changelog.svg)](https://marketplace.visualstudio.com/items?itemName=JacobCofman.changelog)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/JacobCofman.changelog.svg)](https://marketplace.visualstudio.com/items?itemName=JacobCofman.changelog)
[![Rating](https://vsmarketplacebadge.apphb.com/rating/JacobCofman.changelog.svg)](https://marketplace.visualstudio.com/items?itemName=JacobCofman.changelog)

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?color=blue&style=flat-square)](http://opensource.org/licenses/MIT)

## 🔥 Features

Just hover over a `package.json` dependency as seen in this GIF and the extension tries to fetch additional changelog information.

![changelog extension](images/changelog-feature.gif)

## 👀 Known Issues

This extension tries to fetch the changelog data from [changelog.md](https://changelogs.md/) and from the [GitHub API](https://developer.github.com/v3).

Since the current GitHub API has a rate limit of 60 requests per ip address the releases requests break and you have to wait one hour untill the extension works again appropriately. Please be aware that some projects don't provide a changelog or manage it at different places.

## 👌Credits

- This extension uses the API from https://changelogs.md/ created by [Nathan Peck](https://github.com/nathanpeck)
- Big thx to [Filipe Santos Correa](https://github.com/Safi1012) for the icon 😊

## Release Notes

### 0.0.6

- Update changelog

### 0.0.5

- Update packages
- Should now also fetch scoped packages

### 0.0.4

- Should fix issue [#4](https://github.com/JCofman/Changelog/issues/4) it now determines whether the latest release has some valid content

- Escape hatch for issue [#1](https://github.com/JCofman/Changelog/issues/1) to avoid unnecessary fetching in files other then `package.json`

### 0.0.3

- Tries to fetch GitHub releases if no changelog was found.

### 0.0.2

- Publish with new icon

### 0.0.1

- Initial release of changelog extension

---

**Enjoy!**

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://jcofman.de"><img src="https://avatars2.githubusercontent.com/u/2118956?v=4" width="100px;" alt="Jacob Cofman"/><br /><sub><b>Jacob Cofman</b></sub></a><br /><a href="#design-JCofman" title="Design">🎨</a> <a href="https://github.com/JCofman/Changelog/issues?q=author%3AJCofman" title="Bug reports">🐛</a> <a href="https://github.com/JCofman/Changelog/commits?author=JCofman" title="Code">💻</a> <a href="#content-JCofman" title="Content">🖋</a> <a href="https://github.com/JCofman/Changelog/commits?author=JCofman" title="Documentation">📖</a> <a href="#example-JCofman" title="Examples">💡</a> <a href="#ideas-JCofman" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JCofman" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#plugin-JCofman" title="Plugin/utility libraries">🔌</a> <a href="#projectManagement-JCofman" title="Project Management">📆</a> <a href="#review-JCofman" title="Reviewed Pull Requests">👀</a> <a href="#security-JCofman" title="Security">🛡️</a> <a href="#tool-JCofman" title="Tools">🔧</a> <a href="https://github.com/JCofman/Changelog/commits?author=JCofman" title="Tests">⚠️</a> <a href="#tutorial-JCofman" title="Tutorials">✅</a> <a href="#talk-JCofman" title="Talks">📢</a> <a href="#userTesting-JCofman" title="User Testing">📓</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
