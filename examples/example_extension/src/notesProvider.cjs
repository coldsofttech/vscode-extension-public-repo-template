const vscode = require('vscode');

/** Feeds the store's notes to the "Notes" tree view. */
class NotesProvider {
  /** @param {import('./noteStore.cjs').NoteStore} store */
  constructor(store) {
    this.store = store;
    this._onDidChange = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChange.event;
  }

  refresh() {
    this._onDidChange.fire(undefined);
  }

  /** @param {{ id: number, text: string }} note */
  getTreeItem(note) {
    const item = new vscode.TreeItem(note.text, vscode.TreeItemCollapsibleState.None);
    item.id = String(note.id);
    item.contextValue = 'note';
    item.iconPath = new vscode.ThemeIcon('note');
    return item;
  }

  getChildren() {
    return this.store.notes;
  }

  dispose() {
    this._onDidChange.dispose();
  }
}

module.exports = { NotesProvider };
