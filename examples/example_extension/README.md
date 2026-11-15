# Example Extension

A small notes extension that shows how the pieces of a VS Code extension fit together. It is written in plain JavaScript and needs no build step.

## What it does

- Adds an **Example Notes** view to the Activity Bar where you can keep short notes
- Add a note from the view's title bar, the status bar, or the Command Palette (**Example: Add Note**)
- Delete a single note with the trash icon, or clear them all
- Keeps notes per workspace, and limits how many are kept with the `example-extension.maxNotes` setting

## Try it

1. Open this repository in VS Code.
2. Pick **Run Example Extension** in the Run and Debug view and press **F5**.
3. Click the note icon in the Activity Bar of the new window.

## Where to look

- `package.json`: the view, commands, menus and setting the extension contributes
- `src/extension.cjs`: wires everything together on activation
- `src/notesProvider.cjs`: the tree view
- `src/noteStore.cjs`: the note list logic, with no VS Code dependency
