# Development

## Requirements

- Node.js 20 or later
- VS Code 1.90 or later

## Setup

```sh
npm install
```

Open the folder in VS Code and press **F5** (**Run Extension**). This starts `npm run watch` and opens an Extension Development Host with the extension loaded. Run **My Extension: Hello World** from the Command Palette to try it.

## Scripts

| Script                            | Purpose                                                             |
| --------------------------------- | ------------------------------------------------------------------- |
| `npm run build`                   | Bundle `src/extension.js` into `dist/extension.js` with source maps |
| `npm run build:production`        | Minified bundle without source maps (used for packaging)            |
| `npm run watch`                   | Rebuild on change                                                   |
| `npm run lint`                    | ESLint                                                              |
| `npm run typecheck`               | Type check the JavaScript with `checkJs` (see `jsconfig.json`)      |
| `npm run format` / `format:check` | Prettier                                                            |
| `npm run test:unit`               | Vitest unit tests                                                   |
| `npm run test:integration`        | Build, then run tests inside VS Code                                |
| `npm run package`                 | Create the `.vsix`                                                  |

## Conventions

- **JavaScript with JSDoc.** Source is plain `.js`. Annotate public functions with JSDoc and rely on `npm run typecheck` for safety. There is no TypeScript source.
- **ES modules in `src/`.** esbuild bundles them to the CommonJS file VS Code loads. Do not set `"type": "module"` in `package.json`.
- **Keep `vscode` imports thin.** Put logic in modules that do not import `vscode` (such as `greeting.js` and `noteStore.js` in `src/example_extension/`) so it can be unit tested quickly. Only command and provider wiring should touch the API.
- **Dispose what you register.** Push every disposable onto `context.subscriptions`.
- **Empty `activationEvents`.** VS Code infers activation from `contributes` for commands, so you rarely need to list events.
- **Changelog.** Add a short entry under `[Unreleased]` for every user-visible change. The Marketplace shows `CHANGELOG.md` as a tab.

## Renaming the template

Search for `my-extension` and `My Extension` and replace them. The command IDs, view ID, configuration section and the integration test all use the name.

## Starting your own extension

The sample code lives in `src/example_extension/`. When you are ready, remove that folder, its unit tests in `test/unit/`, its contributions in `package.json` (`commands`, `views`, `viewsContainers`, `menus`, `configuration`) and the call in `src/extension.js`, then add your own.
