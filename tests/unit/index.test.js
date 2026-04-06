import { describe, expect, it } from 'vitest';
import {
  DRAFT_KEY,
  clearRegistrationDraft,
  createEmptyDraft,
  loadRegistrationDraft,
  saveRegistrationDraft,
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
    removeItem(key) {
      values.delete(key);
    },
  };
}

describe('registration draft autosave', () => {
  it('saves and restores a normalized draft', () => {
    const storage = createStorage();

    const saved = saveRegistrationDraft(storage, {
      name: '  Anna  ',
      email: '  anna@example.com ',
      note: 'Ready for section 11',
    });

    expect(saved).toEqual({
      name: 'Anna',
      email: 'anna@example.com',
      note: 'Ready for section 11',
    });
    expect(loadRegistrationDraft(storage)).toEqual(saved);
  });

  it('returns defaults for missing or broken draft data', () => {
    expect(loadRegistrationDraft(createStorage())).toEqual(createEmptyDraft());
    expect(
      loadRegistrationDraft(createStorage({ [DRAFT_KEY]: '{ broken json' })),
    ).toEqual(createEmptyDraft());
  });

  it('clears the stored draft explicitly', () => {
    const storage = createStorage({
      [DRAFT_KEY]: JSON.stringify({ name: 'Max', email: 'm@example.com', note: 'Draft' }),
    });

    clearRegistrationDraft(storage);

    expect(loadRegistrationDraft(storage)).toEqual(createEmptyDraft());
  });
});
