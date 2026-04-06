import { describe, expect, it } from 'vitest';
import { createCart, getCheckoutSummary } from '../../src/index.js';

describe('lost this cart summary', () => {
  it('returns the discounted total with explicit context', () => {
    const cart = createCart([
      { price: 100 },
      { price: 50 },
    ], 'EUR');

    expect(getCheckoutSummary(cart, 0.1)).toEqual({
      total: 135,
      currency: 'EUR',
    });
  });

  it('keeps working for zero discount', () => {
    const cart = createCart([{ price: 79.99 }, { price: 20.01 }]);
    expect(getCheckoutSummary(cart, 0)).toEqual({
      total: 100,
      currency: 'USD',
    });
  });

  it('does not mutate the original items array', () => {
    const items = [{ price: 10 }, { price: 15 }];
    const cart = createCart(items);

    getCheckoutSummary(cart, 0.2);

    expect(cart.items).toBe(items);
  });
});
