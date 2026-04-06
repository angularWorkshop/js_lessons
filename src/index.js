'use strict';

export function getAccessState(age, hasPaidAccess, completedIntro) {
  // TODO: a user who is exactly 18 should also be old enough.
  const isOldEnough = age >= 18;

  // TODO: this comparison should work with a real boolean value.
  const hasAccessPayment = hasPaidAccess === true;

  // TODO: this comparison should work with a real boolean value too.
  const introCompleted = completedIntro === true;

  const canOpenWorkshop = isOldEnough && hasAccessPayment && introCompleted;

  return {
    isOldEnough,
    hasAccessPayment,
    introCompleted,
    canOpenWorkshop,
    message: canOpenWorkshop ? 'Access granted' : 'Access denied',
  };
}
