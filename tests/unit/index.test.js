import { describe, expect, it } from 'vitest';
import {
  PREFERENCES_KEY,
  createDefaultPreferences,
  loadPreferences,
  savePreferences,
} from '../../src/index.js';

function createStorage(initial = {}) {
  const values = new Map(Object.entries(initial));

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
  };
}

describe('ui preferences storage', () => {
  it('normalizes and saves preferences', () => {
    const storage = createStorage();

    const result = savePreferences(storage, {
      theme: 'dark',
      onlyCompleted: true,
      query: 'async',
    });

    expect(result).toEqual({
      theme: 'dark',
      onlyCompleted: true,
      query: 'async',
    });
    expect(storage.getItem(PREFERENCES_KEY)).toBe(
      JSON.stringify({ theme: 'dark', onlyCompleted: true, query: 'async' }),
    );
  });

  it('restores valid preferences from storage', () => {
    const storage = createStorage({
      [PREFERENCES_KEY]: JSON.stringify({
        theme: 'dark',
        onlyCompleted: true,
        query: 'forms',
      }),
    });

    expect(loadPreferences(storage)).toEqual({
      theme: 'dark',
      onlyCompleted: true,
      query: 'forms',
    });
  });

  it('falls back to defaults for missing or broken storage values', () => {
    expect(loadPreferences(createStorage())).toEqual(createDefaultPreferences());
    expect(
      loadPreferences(createStorage({
        [PREFERENCES_KEY]: '{ broken json',
      })),
    ).toEqual(createDefaultPreferences());
  });
});
