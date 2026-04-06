import { describe, expect, it } from 'vitest';
import {
  buildRangeSumState,
  sumInclusiveRange,
} from '../../src/index.js';

describe('range sum loop', () => {
  it('adds all numbers in the range from start to end', () => {
    expect(sumInclusiveRange(1, 4)).toBe(10);
  });

  it('returns the same number when the range has one value', () => {
    expect(sumInclusiveRange(3, 3)).toBe(3);
  });

  it('builds a predictable summary object for the finished calculation', () => {
    expect(buildRangeSumState(2, 5)).toEqual({
      start: 2,
      end: 5,
      total: 14,
      numbersCount: 4,
      label: 'Sum from 2 to 5 is 14',
    });
  });
});
