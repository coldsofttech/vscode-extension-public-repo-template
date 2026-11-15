# vscode-extension-public-repo-template

[![CI](https://github.com/coldsofttech/vscode-extension-public-repo-template/actions/workflows/ci.yml/badge.svg)](https://github.com/coldsofttech/vscode-extension-public-repo-template/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/coldsofttech/vscode-extension-public-repo-template)](LICENSE)
[![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.90-007ACC?logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)
[![Node](https://img.shields.io/badge/Node-%E2%89%A520-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-JSDoc-F7DF1E?logo=javascript&logoColor=black)](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)
[![esbuild](https://img.shields.io/badge/esbuild-bundled-FFCF00?logo=esbuild&logoColor=black)](https://esbuild.github.io/)
[![Vitest](https://img.shields.io/badge/Vitest-tested-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-linted-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)

A ready-to-use starting point for building and publishing a Visual Studio Code extension, with working examples, tests, continuous integration and one-tag releases already in place.

## What you get

- Example features in plain JavaScript: a Hello World command, and a notes view with commands, a status bar item and a setting
- One-press debugging (F5) and live rebuilding while you work
- Fast unit tests and tests that run inside a real VS Code
- Linting, formatting, type checking and tests on every pull request, split into clear CI jobs
- Weekly security scanning (Semgrep) and dependency audits
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

## Development

```bash
git clone https://github.com/coldsofttech/vscode-extension-public-repo-template.git
cd vscode-extension-public-repo-template
npm ci
```

Press **F5** in VS Code to launch the extension in a test window. Run `npm test` for the unit and integration tests. See the [development guide](docs/development.md) for debugging, linting and testing.

## Releasing

Update the version in `package.json` and move the `CHANGELOG.md` entries under it, then push a matching tag such as `v1.0.0`. The release workflow builds the extension and attaches it to a GitHub Release. To also publish it, add your marketplace tokens as repository secrets. See the [publishing guide](docs/publishing.md).

## Learn more

See the [documentation](docs/README.md) for development, testing, architecture and publishing details.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please report security issues privately as described in [SECURITY.md](SECURITY.md). For help, see [SUPPORT.md](SUPPORT.md).

## License

Released under the [MIT License](LICENSE).
