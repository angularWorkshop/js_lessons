import { describe, expect, it } from 'vitest';
import {
  buildWorkshopAccessState,
  canStartWorkshop,
} from '../../src/index.js';

describe('workshop access rules', () => {
  it('grants access to an adult who accepted the rules', () => {
    expect(canStartWorkshop(20, true, false)).toBe(true);
  });

  it('grants access to a teenager only with parent consent', () => {
    expect(canStartWorkshop(16, true, true)).toBe(true);
    expect(canStartWorkshop(16, true, false)).toBe(false);
  });

  it('denies access to users younger than 14', () => {
    expect(canStartWorkshop(12, true, true)).toBe(false);
  });

  it('builds the correct final state object', () => {
    expect(buildWorkshopAccessState(16, true, true)).toEqual({
      age: 16,
      acceptedRules: true,
      hasParentConsent: true,
      canStart: true,
      message: 'Access granted',
    });

    expect(buildWorkshopAccessState(16, true, false)).toEqual({
      age: 16,
      acceptedRules: true,
      hasParentConsent: false,
      canStart: false,
      message: 'Access denied',
    });
  });
});
