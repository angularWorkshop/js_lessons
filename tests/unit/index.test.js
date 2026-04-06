import { describe, expect, it } from 'vitest';
import {
  addShoppingItem,
  buildShoppingList,
  buildShoppingState,
} from '../../src/index.js';

describe('shopping list update', () => {
  it('builds a shopping list from two starting values', () => {
    expect(buildShoppingList('milk', 'bread')).toEqual(['milk', 'bread']);
  });

  it('adds one more item to the end of the list', () => {
    expect(addShoppingItem(['milk', 'bread'], 'tea')).toEqual(['milk', 'bread', 'tea']);
  });

  it('builds a predictable shopping state object', () => {
    expect(buildShoppingState('milk', 'bread', 'tea')).toEqual({
      initialItems: ['milk', 'bread'],
      updatedItems: ['milk', 'bread', 'tea'],
      count: 3,
      lastItem: 'tea',
    });
  });
});
