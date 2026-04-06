'use strict';

export function createCart(items, currency = 'USD') {
  return {
    items,
    currency,
    getTotal(discount = 0) {
      const subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
      return Number((subtotal * (1 - discount)).toFixed(2));
    },
  };
}

export function getCheckoutSummary(cart, discount) {
  const calculate = cart.getTotal;

  // TODO: call the extracted method with the correct context
  void calculate;
  void discount;

  return {
    total: 0,
    currency: cart.currency,
  };
}
