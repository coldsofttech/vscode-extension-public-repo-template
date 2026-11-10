import * as vscode from 'vscode';
import { NoteStore } from './noteStore.js';
import { NotesProvider } from './notesProvider.js';

const STATE_KEY = 'my-extension.notes';

/**
 * Registers the example notes feature: a tree view, commands, a status bar item and a setting.
 * @param {vscode.ExtensionContext} context
 */
export function registerExampleExtension(context) {
  const store = new NoteStore(context.workspaceState.get(STATE_KEY, []));
  const provider = new NotesProvider(store);
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  statusBar.command = 'my-extension.addNote';

  const update = () => {
    context.workspaceState.update(STATE_KEY, store.notes);
    statusBar.text = `$(note) ${store.notes.length}`;
    statusBar.tooltip = 'Add a note';
    statusBar.show();
    provider.refresh();
  };
  update();

  context.subscriptions.push(
    provider,
    statusBar,
    vscode.window.registerTreeDataProvider('my-extension.notes', provider),

    vscode.commands.registerCommand('my-extension.addNote', async () => {
      const text = await vscode.window.showInputBox({ prompt: 'Note text' });
      if (!text?.trim()) return;
      const max = vscode.workspace.getConfiguration('my-extension').get('maxNotes', 10);
      store.add(text.trim(), max);
      update();
    }),

    vscode.commands.registerCommand('my-extension.deleteNote', (note) => {
      store.remove(note.id);
      update();
    }),

    vscode.commands.registerCommand('my-extension.clearNotes', () => {
      store.clear();
      update();
    }),
  );
}
