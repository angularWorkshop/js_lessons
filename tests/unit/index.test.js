import { describe, expect, it } from 'vitest';
import {
  buildDisplayNameState,
  normalizeDisplayName,
} from '../../src/index.js';

describe('clean display name', () => {
  it('trims spaces and normalizes the letter case', () => {
    expect(normalizeDisplayName('  anNa  ')).toBe('Anna');
  });

  it('returns Guest when the cleaned value is empty', () => {
    expect(normalizeDisplayName('   ')).toBe('Guest');
  });

  it('builds a predictable state object from the final name', () => {
    expect(buildDisplayNameState('  maX  ')).toEqual({
      rawName: '  maX  ',
      normalizedName: 'Max',
      greeting: 'Hello, Max!',
      nameLength: 3,
    });
  });
});
