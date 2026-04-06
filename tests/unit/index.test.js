import { describe, expect, it } from 'vitest';
import {
  buildCalculatorState,
  sumPromptValues,
  toNumber,
} from '../../src/index.js';

describe('string input calculator', () => {
  it('converts prompt values to numbers', () => {
    expect(toNumber('2')).toBe(2);
    expect(toNumber('0')).toBe(0);
    expect(toNumber('abc')).toBeNull();
    expect(toNumber('')).toBeNull();
    expect(toNumber(null)).toBeNull();
  });

  it('adds converted numbers instead of joining strings', () => {
    expect(sumPromptValues('2', '3')).toBe(5);
    expect(sumPromptValues('10', '7')).toBe(17);
  });

  it('returns null when one of the inputs is invalid', () => {
    expect(sumPromptValues('2', 'abc')).toBeNull();
    expect(sumPromptValues('', '5')).toBeNull();
  });

  it('builds a predictable calculator state', () => {
    expect(buildCalculatorState('2', '3')).toEqual({
      firstRawValue: '2',
      secondRawValue: '3',
      result: 5,
      message: 'Result: 5',
    });

    expect(buildCalculatorState('2', 'abc')).toEqual({
      firstRawValue: '2',
      secondRawValue: 'abc',
      result: null,
      message: 'Enter two numbers.',
    });
  });
});
