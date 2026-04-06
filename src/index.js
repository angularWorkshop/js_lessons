'use strict';

export function buildStudentFullName(firstName, lastName) {
  // TODO: return one string with firstName and lastName
  return '';
}

export function calculateProgressPercent(completedLessons, totalLessons) {
  // TODO: return a rounded percentage; if totalLessons is 0, return 0
  return 0;
}

export function buildStudentCardState(firstName, lastName, completedLessons, totalLessons) {
  const fullName = buildStudentFullName(firstName, lastName);
  const progressPercent = calculateProgressPercent(completedLessons, totalLessons);

  return {
    fullName,
    completedLessons,
    totalLessons,
    progressPercent,
    hasStarted: false, // TODO: completedLessons > 0
    statusLine: '', // TODO: `${fullName}: ${progressPercent}% completed`
  };
}
