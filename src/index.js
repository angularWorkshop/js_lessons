'use strict';

export function filterPaidOrders(orders) {
  return orders.filter(order => order.status === 'paid');
}

export function calculatePaidTotal(orders) {
  return orders.reduce((sum, order) => sum + order.amount, 0);
}

export function buildPaidOrdersState(orders) {
  const paidOrders = filterPaidOrders(orders);
  const total = calculatePaidTotal(paidOrders);

  return {
    paidCount: paidOrders.length,
    total,
    label: `Paid orders: ${paidOrders.length}, total: ${total}`,
  };
}
