# vscode-extension-public-repo-template

A ready-to-use starting point for building and publishing a Visual Studio Code extension, with a working sample extension, tests, continuous integration and one-tag releases already in place.

## What you get

- A minimal "Hello World" extension written in plain JavaScript, with editor type checking
- One-press debugging (F5) and live rebuilding while you work
- Fast unit tests and tests that run inside a real VS Code
- Linting, formatting and security checks on every pull request
- Tag-based releases that attach the `.vsix` to GitHub and can publish to the Visual Studio Marketplace and Open VSX
- Contribution, conduct, support and security-reporting guidelines, issue forms and a pull request template

## Getting started

1. Click **Use this template** on GitHub and create your new repository.
2. Run the **Init** workflow from the Actions tab and merge the pull request it opens. This fills in your owner and repository name. Then delete `.github/workflows/init.yml`.
3. Rename the extension in `package.json` (`name`, `displayName`, `publisher`, `description`) and update the command and setting IDs that start with `my-extension`.
4. Replace `media/icon.png` with your own 128x128 icon, and replace this README with a description of your extension.
5. Install dependencies and press **F5** in VS Code to launch your extension in a test window: `npm install`.
6. Apply the repository protections by following the [setup guide](docs/repo-setup.md).
7. Install the commit checks: `pip install pre-commit && pre-commit install --hook-type pre-commit --hook-type post-commit`.

## Releasing

Update the version in `package.json` and `CHANGELOG.md`, then push a matching tag such as `v1.0.0`. The release workflow builds the extension and attaches it to a GitHub Release. To also publish it, add your marketplace tokens as repository secrets. See the [publishing guide](docs/publishing.md).

## Learn more

See the [documentation](docs/README.md) for development, testing, architecture and publishing details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please report security issues privately as described in [SECURITY.md](SECURITY.md).

## License

Released under the [MIT License](LICENSE).
