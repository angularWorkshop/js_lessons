import { describe, expect, it } from 'vitest';
import {
  buildSurveyState,
  normalizeName,
  parseAge,
} from '../../src/index.js';

describe('safe survey input', () => {
  it('normalizes the name from prompt', () => {
    expect(normalizeName('Mila')).toBe('Mila');
    expect(normalizeName('')).toBe('Guest');
    expect(normalizeName(null)).toBe('Guest');
  });

  it('parses age from prompt', () => {
    expect(parseAge('19')).toBe(19);
    expect(parseAge('0')).toBe(0);
    expect(parseAge('abc')).toBeNull();
    expect(parseAge('')).toBeNull();
    expect(parseAge(null)).toBeNull();
    expect(parseAge('-2')).toBeNull();
  });

  it('builds a ready-to-use survey state', () => {
    expect(buildSurveyState('Mila', '19', true)).toEqual({
      name: 'Mila',
      age: 19,
      confirmedRules: true,
      canStart: true,
      greeting: 'Hello, Mila!',
    });
  });

  it('keeps blocked state when input is invalid', () => {
    expect(buildSurveyState('', 'abc', false)).toEqual({
      name: 'Guest',
      age: null,
      confirmedRules: false,
      canStart: false,
      greeting: 'Hello, Guest!',
    });
  });
});
