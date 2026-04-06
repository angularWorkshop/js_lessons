import { describe, expect, it } from 'vitest';
import {
  buildPaidOrdersState,
  calculatePaidTotal,
  filterPaidOrders,
} from '../../src/index.js';

const orders = [
  { id: 'o1', status: 'paid', amount: 30 },
  { id: 'o2', status: 'new', amount: 10 },
  { id: 'o3', status: 'paid', amount: 20 },
];

describe('filter and reduce paid orders', () => {
  it('keeps only paid orders', () => {
    expect(filterPaidOrders(orders)).toEqual([
      { id: 'o1', status: 'paid', amount: 30 },
      { id: 'o3', status: 'paid', amount: 20 },
    ]);
  });

  it('sums the amounts with reduce()', () => {
    expect(calculatePaidTotal([
      { id: 'o1', status: 'paid', amount: 30 },
      { id: 'o3', status: 'paid', amount: 20 },
    ])).toBe(50);
  });

  it('builds a predictable paid-orders state', () => {
    expect(buildPaidOrdersState(orders)).toEqual({
      paidCount: 2,
      total: 50,
      label: 'Paid orders: 2, total: 50',
    });
  });
});
