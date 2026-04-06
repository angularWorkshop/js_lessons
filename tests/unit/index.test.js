import { describe, expect, it } from 'vitest';
import {
  buildPriceLabel,
  buildScopeSnapshot,
} from '../../src/index.js';

describe('fix scope visibility', () => {
  it('builds the paid label when coupon is applied', () => {
    expect(buildPriceLabel('Anna', true)).toBe(
      'JavaScript Bootcamp: Anna - coupon applied',
    );
  });

  it('builds the regular label when coupon is missing', () => {
    expect(buildPriceLabel('Anna', false)).toBe(
      'JavaScript Bootcamp: Anna - regular price',
    );
  });

  it('returns a snapshot that shows outer and inner scope values', () => {
    expect(buildScopeSnapshot('Anna')).toEqual({
      courseLabel: 'JavaScript Bootcamp',
      priceLabel: 'JavaScript Bootcamp: Anna - coupon applied',
      innerInfo: 'JavaScript Bootcamp: Anna - coupon applied - ready',
    });
  });
});
