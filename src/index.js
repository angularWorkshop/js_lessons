'use strict';

export function calculateDiscountAmount(basePrice, discountPercent) {
  return (basePrice * discountPercent) / 100;
}

export function calculateFinalPrice(basePrice, discountPercent) {
  return basePrice - calculateDiscountAmount(basePrice, discountPercent);
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
