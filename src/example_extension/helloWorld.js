import * as vscode from 'vscode';
import { buildGreeting } from './greeting.js';

/**
 * Registers the `my-extension.helloWorld` command.
 * @returns {import('vscode').Disposable}
 */
export function registerHelloWorld() {
  return vscode.commands.registerCommand('my-extension.helloWorld', async () => {
    const name = vscode.workspace.getConfiguration('my-extension').get('greetingName');
    await vscode.window.showInformationMessage(buildGreeting(String(name ?? '')));
  });
}
