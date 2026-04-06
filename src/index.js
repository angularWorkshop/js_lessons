'use strict';

export function canStartWorkshop(age, acceptedRules, hasParentConsent) {
  if (age >= 18) {
    return acceptedRules === true;
  }

  if (age >= 14) {
    return acceptedRules === true && hasParentConsent === true;
  }

  return false;
}

export function buildWorkshopAccessState(age, acceptedRules, hasParentConsent) {
  const canStart = canStartWorkshop(age, acceptedRules, hasParentConsent);

  return {
    age,
    acceptedRules,
    hasParentConsent,
    canStart,
    message: canStart ? 'Access granted' : 'Access denied',
  };
}
