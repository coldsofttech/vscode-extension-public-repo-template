# Example extension

A small notes feature that shows how the pieces of a VS Code extension fit together. Delete this folder, and its wiring in `src/extension.js` and `package.json`, when you start your own extension.

## What it does

- Adds a **Notes** view to the Activity Bar where you can keep short notes
- Add a note from the view's title bar, the status bar, or the Command Palette (**My Extension: Add Note**)
- Delete one note with the trash icon, or clear them all
- Keeps notes per workspace, and limits how many are kept with the `my-extension.maxNotes` setting

## Try it

Press **F5** in VS Code, then click the note icon in the Activity Bar of the new window.

## Where to look

- `index.js`: wires the view, commands and status bar together
- `notesProvider.js`: the tree view
- `noteStore.js`: the note list logic, with no VS Code dependency (unit tested in `test/unit/noteStore.test.js`)
- `package.json` at the repository root: the view, commands, menus and setting it contributes
