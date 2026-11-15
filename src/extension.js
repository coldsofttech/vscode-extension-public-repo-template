import { registerExampleExtension } from './example_extension/index.js';

/**
 * Called by VS Code when the extension is activated.
 * Replace the example below with your own features.
 * @param {import('vscode').ExtensionContext} context
 */
export function activate(context) {
  registerExampleExtension(context);
}

/** Called by VS Code when the extension is deactivated. */
export function deactivate() {}
