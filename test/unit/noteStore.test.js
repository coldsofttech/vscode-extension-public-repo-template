import { describe, expect, it } from 'vitest';
import { NoteStore } from '../../src/example_extension/noteStore.js';

describe('NoteStore', () => {
  it('adds notes with increasing ids', () => {
    const store = new NoteStore();
    store.add('a', 5);
    store.add('b', 5);
    expect(store.notes).toEqual([
      { id: 1, text: 'a' },
      { id: 2, text: 'b' },
    ]);
  });

  it('drops the oldest notes beyond the limit', () => {
    const store = new NoteStore();
    ['a', 'b', 'c'].forEach((t) => store.add(t, 2));
    expect(store.notes.map((n) => n.text)).toEqual(['b', 'c']);
  });

  it('removes one note and clears all', () => {
    const store = new NoteStore([{ id: 4, text: 'x' }]);
    store.add('y', 5);
    expect(store.notes.map((n) => n.id)).toEqual([4, 5]);
    store.remove(4);
    expect(store.notes).toEqual([{ id: 5, text: 'y' }]);
    store.clear();
    expect(store.notes).toEqual([]);
  });
});
