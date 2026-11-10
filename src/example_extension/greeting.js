/**
 * Builds the greeting shown by the Hello World command.
 * Kept free of `vscode` imports so it can be unit tested without VS Code.
 * @param {string} [name] Who to greet. Falls back to "World" when empty.
 * @returns {string}
 */
export function buildGreeting(name = '') {
  const trimmed = name.trim();
  return `Hello, ${trimmed || 'World'}!`;
}
