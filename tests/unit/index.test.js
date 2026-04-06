import { describe, expect, it } from 'vitest';
import { getAccessState } from '../../src/index.js';

describe('access comparisons', () => {
  it('grants access when all rules are satisfied', () => {
    expect(getAccessState(18, true, true)).toEqual({
      isOldEnough: true,
      hasAccessPayment: true,
      introCompleted: true,
      canOpenWorkshop: true,
      message: 'Access granted',
    });
  });

  it('denies access when age is too low', () => {
    expect(getAccessState(17, true, true)).toEqual({
      isOldEnough: false,
      hasAccessPayment: true,
      introCompleted: true,
      canOpenWorkshop: false,
      message: 'Access denied',
    });
  });

  it('denies access when payment is missing', () => {
    expect(getAccessState(19, false, true)).toEqual({
      isOldEnough: true,
      hasAccessPayment: false,
      introCompleted: true,
      canOpenWorkshop: false,
      message: 'Access denied',
    });
  });
});
