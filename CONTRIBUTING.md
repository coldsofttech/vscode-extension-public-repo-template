# Contributing

Thanks for taking the time to contribute! By participating you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Reporting bugs and requesting features

Open an issue using one of the provided forms. Search existing issues first. For security problems, do **not** open an issue; follow [SECURITY.md](SECURITY.md).

## Setting up

You need Node.js 20 or later and VS Code. Run `npm install`, then press **F5** to launch the extension in a test window. See the [development guide](docs/development.md) for the available scripts.

## Submitting changes

1. Fork the repository and create a branch from `main`.
2. Make your change, keeping it focused on one thing.
3. Install the commit checks: `pip install pre-commit && pre-commit install --hook-type pre-commit --hook-type post-commit`.
4. Add or update tests, and check your change locally with `npm run lint`, `npm run typecheck` and `npm test`. Integration tests download VS Code on first run and, on Linux, need a display (`xvfb-run -a npm run test:integration`).
5. Add an entry under `[Unreleased]` in `CHANGELOG.md` (one or two lines, written from a reader's point of view).
6. If you change commands, settings or views in `package.json`, update the README and docs to match.
7. Open a pull request and fill in the template.

## Pull request rules

- `main` is protected: changes land through pull requests that are squash-merged.
- Required checks must pass and the branch must be up to date.
- A code owner must review, and all conversations must be resolved.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/), for example `fix: handle empty input`.
