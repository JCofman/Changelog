# Changelog README

<p align="center">
    <img alt="changelog icon" src="https://user-images.githubusercontent.com/2118956/56217994-79ebbf80-6064-11e9-9b82-162b4d0dfa0b.png" width="300" />
</p>

This vscode extension tries to add changelog information to the hovered `package.json` package dependency.

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

### 0.0.4

- Should fix issue #4 it now determines whether the latest release has some valid content to show.

- Escape hatch for issue #1 to avoid unnecessary fetching in files other then `package.json`

### 0.0.3

- Tries to fetch GitHub releases if no changelog was found.

### 0.0.2

- Publish with new icon

### 0.0.1

- Initial release of changelog extension

---

**Enjoy!**
