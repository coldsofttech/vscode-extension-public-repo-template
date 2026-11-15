import { registerHelloWorld } from './commands/helloWorld.js';
import { registerExampleExtension } from './example_extension/index.js';

/**
 * Called by VS Code when the extension is activated.
 * @param {import('vscode').ExtensionContext} context
 */
export function activate(context) {
  context.subscriptions.push(registerHelloWorld());
  registerExampleExtension(context);
}

/** Called by VS Code when the extension is deactivated. */
export function deactivate() {}
