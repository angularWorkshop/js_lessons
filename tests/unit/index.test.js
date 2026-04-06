import { describe, expect, it } from 'vitest';
import { createLazyRange } from '../../src/index.js';

describe('lazy range generator', () => {
  it('yields ascending values inclusively', () => {
    expect([...createLazyRange(1, 5, 2)]).toEqual([1, 3, 5]);
  });

  it('yields descending values inclusively', () => {
    expect([...createLazyRange(5, 1, 2)]).toEqual([5, 3, 1]);
  });

  it('throws for zero step', () => {
    expect(() => [...createLazyRange(1, 3, 0)]).toThrow('Step must not be zero');
  });
});
