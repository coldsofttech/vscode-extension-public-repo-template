import os from 'node:os';
import path from 'node:path';
import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
  files: 'test/integration/**/*.test.cjs',
  mocha: { ui: 'bdd', timeout: 20000 },
  // A short path: VS Code's IPC socket path must stay under ~103 characters on macOS.
  launchArgs: ['--user-data-dir', path.join(os.tmpdir(), 'vsct')],
});
