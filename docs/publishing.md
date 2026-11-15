# Publishing

Releases are tag-driven. Pushing a tag such as `v1.2.3` runs `.github/workflows/release.yml`.

## What the workflow does

1. Checks that the tag matches the `version` in `package.json`.
2. Runs lint, type checking, unit tests and integration tests.
3. Packages the `.vsix`.
4. Creates a GitHub Release with the `.vsix` attached and generated notes.
5. Publishes to the Visual Studio Marketplace if `VSCE_PAT` is set.
6. Publishes to Open VSX if `OVSX_PAT` is set.

Steps 5 and 6 skip with a message when their secret is missing, so the template works before any marketplace account exists.

## One-time setup

### Visual Studio Marketplace

1. Create a publisher at <https://marketplace.visualstudio.com/manage> and set its ID as `publisher` in `package.json`.
2. In Azure DevOps, create a personal access token with the **Marketplace > Manage** scope for **all accessible organizations**.
3. Add it as the repository secret `VSCE_PAT`.

### Open VSX (VSCodium, Cursor and others)

1. Sign in at <https://open-vsx.org>, link your GitHub account and sign the publisher agreement.
2. Create the namespace once: `npx ovsx create-namespace <publisher> -p <token>`.
3. Generate an access token in your Open VSX settings and add it as the repository secret `OVSX_PAT`.

## Cutting a release

1. Move the `[Unreleased]` entries in `CHANGELOG.md` under a new version heading.
2. Bump `version` in `package.json` (`npm version <level> --no-git-tag-version`).
3. Merge the change, then tag and push: `git tag v1.2.3 && git push origin v1.2.3`.

## Previewing the package

```sh
npm run package
npx vsce ls
```

Install the resulting file locally with **Extensions: Install from VSIX...** to try it before releasing.

## Pre-releases

The Marketplace does not accept semver suffixes such as `1.2.3-beta.1`. For a pre-release, use `major.minor.patch` and publish with `vsce publish --pre-release` by running the command manually or adapting the workflow.
