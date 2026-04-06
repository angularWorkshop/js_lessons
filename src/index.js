'use strict';

export function filterPaidOrders(orders) {
  // TODO: use filter() and keep only paid orders
  return [];
}

export function calculatePaidTotal(orders) {
  // TODO: use reduce() and sum the amounts
  return 0;
}

export function buildPaidOrdersState(orders) {
  const paidOrders = filterPaidOrders(orders);
  const total = calculatePaidTotal(paidOrders);

  return {
    paidCount: 0, // TODO: number of paid orders
    total,
    label: '', // TODO: `Paid orders: ${paidOrders.length}, total: ${total}`
  };
}
