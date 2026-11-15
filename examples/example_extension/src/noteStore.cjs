/**
 * A tiny in-memory list of notes. It has no `vscode` dependency, so it is easy to unit test.
 */
class NoteStore {
  /** @param {{ id: number, text: string }[]} [initial] Notes restored from storage. */
  constructor(initial = []) {
    this.notes = [...initial];
    this.nextId = this.notes.reduce((max, n) => Math.max(max, n.id), 0) + 1;
  }

  /**
   * Adds a note, dropping the oldest ones beyond `max`.
   * @param {string} text
   * @param {number} max
   */
  add(text, max) {
    this.notes.push({ id: this.nextId++, text });
    while (this.notes.length > max) this.notes.shift();
  }

  /** @param {number} id */
  remove(id) {
    this.notes = this.notes.filter((n) => n.id !== id);
  }

  clear() {
    this.notes = [];
  }
}

module.exports = { NoteStore };
