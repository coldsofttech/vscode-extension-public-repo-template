import { describe, expect, it } from 'vitest';
import { buildGreeting } from '../../src/example_extension/greeting.js';

describe('buildGreeting', () => {
  it('greets the given name', () => {
    expect(buildGreeting('Ada')).toBe('Hello, Ada!');
  });

  it('falls back to World when the name is empty', () => {
    expect(buildGreeting('   ')).toBe('Hello, World!');
    expect(buildGreeting()).toBe('Hello, World!');
  });
});
