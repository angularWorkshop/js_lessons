'use strict';

export function calculateDiscountAmount(basePrice, discountPercent) {
  // TODO: calculate how much money should be subtracted from the base price.
  return 0;
}

export function calculateFinalPrice(basePrice, discountPercent) {
  // TODO: use calculateDiscountAmount and return the final price after discount.
  return basePrice;
}

export function buildPriceState(basePrice, discountPercent) {
  const discountAmount = calculateDiscountAmount(basePrice, discountPercent);
  const finalPrice = calculateFinalPrice(basePrice, discountPercent);

  return {
    basePrice,
    discountPercent,
    discountAmount,
    finalPrice,
    label: `Final price: ${finalPrice}`,
  };
}
