import { describe, expect, it } from 'vitest';
import {
  buildPriceState,
  calculateDiscountAmount,
  calculateFinalPrice,
} from '../../src/index.js';

describe('discount calculator', () => {
  it('calculates the discount amount', () => {
    expect(calculateDiscountAmount(200, 15)).toBe(30);
    expect(calculateDiscountAmount(120, 0)).toBe(0);
  });

  it('calculates the final price after discount', () => {
    expect(calculateFinalPrice(200, 15)).toBe(170);
    expect(calculateFinalPrice(80, 25)).toBe(60);
  });

  it('builds a predictable price state', () => {
    expect(buildPriceState(200, 15)).toEqual({
      basePrice: 200,
      discountPercent: 15,
      discountAmount: 30,
      finalPrice: 170,
      label: 'Final price: 170',
    });
  });
});
