'use strict';

const courseLabel = 'JavaScript Bootcamp';

export function buildPriceLabel(userName, hasCoupon) {
  let discountLabel = '';

  if (hasCoupon) {
    discountLabel = 'coupon applied';
  } else {
    discountLabel = 'regular price';
  }

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
