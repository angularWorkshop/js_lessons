import { describe, expect, it } from 'vitest';
import {
  buildArrayEdgesState,
  getFirstItem,
  getLastItem,
} from '../../src/index.js';

describe('first and last array items', () => {
  it('reads the first item by index 0', () => {
    expect(getFirstItem(['apple', 'banana'])).toBe('apple');
  });

  it('reads the last item with length - 1', () => {
    expect(getLastItem(['apple', 'banana'])).toBe('banana');
  });

  it('returns nulls for an empty array', () => {
    expect(getFirstItem([])).toBeNull();
    expect(getLastItem([])).toBeNull();
  });

  it('builds a predictable empty-state object', () => {
    expect(buildArrayEdgesState([])).toEqual({
      count: 0,
      firstItem: null,
      lastItem: null,
      isEmpty: true,
    });
  });
});
