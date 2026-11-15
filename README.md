# vscode-extension-public-repo-template

A ready-to-use starting point for building and publishing a Visual Studio Code extension, with working examples, tests, continuous integration and one-tag releases already in place.

## What you get

- Example features in plain JavaScript: a Hello World command, and a notes view with commands, a status bar item and a setting
- One-press debugging (F5) and live rebuilding while you work
- Fast unit tests and tests that run inside a real VS Code
- Linting, formatting and security checks on every pull request
- Tag-based releases that attach the `.vsix` to GitHub and can publish to the Visual Studio Marketplace and Open VSX
- Contribution, conduct, support and security-reporting guidelines, issue forms and a pull request template

## Getting started

1. Click **Use this template** on GitHub and create your new repository.
2. Run the **Init** workflow from the Actions tab and merge the pull request it opens. This fills in your owner and repository name. Then delete `.github/workflows/init.yml`.
3. Rename the extension in `package.json` (`name`, `displayName`, `publisher`, `description`) and replace the `my-extension` prefix on command, view and setting IDs.
4. Run `npm install`, then press **F5** in VS Code to launch your extension in a test window. Try **My Extension: Hello World** from the Command Palette, and the note icon in the Activity Bar.
5. Replace the examples in `src/example_extension/` with your own features. The [development guide](docs/development.md#starting-your-own-extension) lists what to remove.
6. Replace `media/icon.png` with your own 128x128 icon, and replace this README with a description of your extension.
7. Add your contact details in `CODE_OF_CONDUCT.md`, and apply the repository protections by following the [setup guide](docs/repo-setup.md).
8. Install the commit checks: `pip install pre-commit && pre-commit install --hook-type pre-commit --hook-type post-commit`.

## Releasing

Update the version in `package.json` and `CHANGELOG.md`, then push a matching tag such as `v1.0.0`. The release workflow builds the extension and attaches it to a GitHub Release. To also publish it, add your marketplace tokens as repository secrets. See the [publishing guide](docs/publishing.md).

## Learn more

See the [documentation](docs/README.md) for development, testing, architecture and publishing details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please report security issues privately as described in [SECURITY.md](SECURITY.md). For help, see [SUPPORT.md](SUPPORT.md).

## License

Released under the [MIT License](LICENSE).
