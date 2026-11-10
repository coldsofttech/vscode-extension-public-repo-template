// Runs inside a real VS Code instance via @vscode/test-cli (see .vscode-test.mjs).
const assert = require('node:assert');
const vscode = require('vscode');

describe('extension', () => {
  it('registers the Hello World command on activation', async () => {
    const extension = vscode.extensions.all.find((e) => e.id.endsWith('.my-extension'));
    assert.ok(extension, 'extension should be installed in the test host');
    await extension.activate();

    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('my-extension.helloWorld'));
  });
});
