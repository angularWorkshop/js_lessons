'use strict';

const courseLabel = 'JavaScript Bootcamp';

export function buildPriceLabel(userName, hasCoupon) {
  if (hasCoupon) {
    let discountLabel = 'coupon applied';
  } else {
    let discountLabel = 'regular price';
  }

  // TODO: make discountLabel visible here without using var
  return `${courseLabel}: ${userName} - ${discountLabel}`;
}

export function buildScopeSnapshot(userName) {
  const priceLabel = buildPriceLabel(userName, true);

  function innerInfo() {
    const localStep = 'ready';
    return `${priceLabel} - ${localStep}`;
  }

  return {
    courseLabel,
    priceLabel,
    innerInfo: innerInfo(),
  };
}
