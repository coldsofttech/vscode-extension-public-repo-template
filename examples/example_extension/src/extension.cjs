const vscode = require('vscode');
const { NoteStore } = require('./noteStore.cjs');
const { NotesProvider } = require('./notesProvider.cjs');

const STATE_KEY = 'example-extension.notes';

/** @param {import('vscode').ExtensionContext} context */
function activate(context) {
  const store = new NoteStore(context.workspaceState.get(STATE_KEY, []));
  const provider = new NotesProvider(store);
  const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  statusBar.command = 'example-extension.addNote';

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
    vscode.window.registerTreeDataProvider('example-extension.notes', provider),

    vscode.commands.registerCommand('example-extension.addNote', async () => {
      const text = await vscode.window.showInputBox({ prompt: 'Note text' });
      if (!text?.trim()) return;
      const max = vscode.workspace.getConfiguration('example-extension').get('maxNotes', 10);
      store.add(text.trim(), max);
      update();
    }),

    vscode.commands.registerCommand('example-extension.deleteNote', (note) => {
      store.remove(note.id);
      update();
    }),

    vscode.commands.registerCommand('example-extension.clearNotes', () => {
      store.clear();
      update();
    }),
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
