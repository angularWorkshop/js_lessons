'use strict';

export function canStartWorkshop(age, acceptedRules, hasParentConsent) {
  // TODO: implement the access rules described in the README.
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
