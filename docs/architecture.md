# Architecture

```text
src/
  extension.js          activate() and deactivate(); registers everything
  example_extension/    sample features (Hello World command, notes tree view); replace with your own
    noteStore.js        pure logic with no vscode import, unit tested
    notesProvider.js    tree view wiring
    helloWorld.js       one command per file, each exports a register* function
test/
  unit/                 Vitest, runs in Node
  integration/          Mocha, runs inside VS Code (CommonJS, *.test.cjs)
dist/                   build output (git-ignored), the only code that ships
media/                  icon and Marketplace images
```

## Build

`esbuild.mjs` bundles `src/extension.js` and everything it imports into one CommonJS file, `dist/extension.js`, with `vscode` left external because the host provides it. Because dependencies are bundled, the package ships without `node_modules` (`vsce package --no-dependencies`).

## Manifest

`package.json` is both the npm manifest and the extension manifest. Key fields:

- `main`: entry point, `./dist/extension.js`
- `engines.vscode`: the minimum VS Code version. Keep `@types/vscode` on the same version.
- `contributes`: commands, settings, menus, keybindings and so on
- `icon`, `categories`, `publisher`: Marketplace listing

## Desktop only

This template targets the desktop extension host (Node APIs are available). To also run on vscode.dev, add a second esbuild target with `platform: 'browser'`, a `browser` entry in `package.json`, and avoid Node-only modules.

## Packaged files

`.vscodeignore` excludes everything except `dist/`, `media/` and the root manifest files. Run `npx vsce ls` to preview what will ship.
