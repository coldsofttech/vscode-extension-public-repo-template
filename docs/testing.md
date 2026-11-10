# Testing

## Unit tests

`npm run test:unit` runs Vitest on `test/unit/**/*.test.js`. These run in plain Node, so they can import any module that does not import `vscode`. Put as much logic as possible behind such modules.

## Integration tests

`npm run test:integration` builds the bundle and runs `test/integration/**/*.test.cjs` inside a downloaded VS Code using `@vscode/test-cli` (configured in `.vscode-test.mjs`). The tests use Mocha's `describe`/`it` and the real `vscode` API.

Integration test files use CommonJS (`.cjs`) because the extension host loads them directly, without a bundler.

On Linux there is no display, so run them under a virtual one:

```sh
xvfb-run -a npm run test:integration
```

## CI

The CI workflow runs pre-commit checks, then lint, formatting, type checking, unit tests and a production build on Node 20 and 22. Integration tests run on Linux, Windows and macOS. A packaging job builds the `.vsix` and uploads it as a workflow artifact so you can try the exact file that would be released. A final `ci` job passes only when every other job passed; it is the single check the `main` ruleset requires.

The first integration run downloads VS Code, which takes a while. `.vscode-test/` is git-ignored.
