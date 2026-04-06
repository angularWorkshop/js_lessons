import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildWelcomeState, parseAge, sanitizeUserName } from '../../src/index.js';

describe('sanitizeUserName', () => {
  it('trims surrounding spaces', () => {
    expect(sanitizeUserName('  Anna  ')).toBe('Anna');
  });

  it('uses Guest fallback for empty input', () => {
    expect(sanitizeUserName('   ')).toBe('Guest');
  });
});

describe('parseAge', () => {
  it('parses numeric input', () => {
    expect(parseAge('21')).toBe(21);
    expect(parseAge(' 18 ')).toBe(18);
    expect(parseAge(19)).toBe(19);
  });

  it('returns null for invalid values', () => {
    expect(parseAge('abc')).toBeNull();
    expect(parseAge('')).toBeNull();
    expect(parseAge('   ')).toBeNull();
    expect(parseAge(null)).toBeNull();
    expect(parseAge(undefined)).toBeNull();
    expect(parseAge(-1)).toBeNull();
    expect(parseAge('Infinity')).toBeNull();
  });
});

describe('buildWelcomeState', () => {
  it('builds a start-ready state for valid confirmed input', () => {
    expect(buildWelcomeState('  Anna  ', '19', true)).toEqual({
      strictMode: true,
      name: 'Anna',
      age: 19,
      canStart: true,
      message: 'Hello, Anna!',
    });
  });

  it('keeps start locked when age is invalid', () => {
    expect(buildWelcomeState('', 'abc', true)).toEqual({
      strictMode: true,
      name: 'Guest',
      age: null,
      canStart: false,
      message: 'Hello, Guest!',
    });
  });

  it('keeps start locked when user did not confirm', () => {
    expect(buildWelcomeState('Anna', '19', false).canStart).toBe(false);
  });
});

describe('style guard', () => {
  it('keeps strict mode as the first statement in source', () => {
    const sourcePath = path.resolve(process.cwd(), 'src/index.js');
    const source = fs.readFileSync(sourcePath, 'utf8');

    expect(source.trimStart().startsWith("'use strict';")).toBe(true);
  });
});
