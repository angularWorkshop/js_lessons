'use strict';

export function buildStudentFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

export function calculateProgressPercent(completedLessons, totalLessons) {
  if (totalLessons === 0) {
    return 0;
  }

  return Math.round((completedLessons / totalLessons) * 100);
}

export function buildStudentCardState(firstName, lastName, completedLessons, totalLessons) {
  const fullName = buildStudentFullName(firstName, lastName);
  const progressPercent = calculateProgressPercent(completedLessons, totalLessons);

  return {
    fullName,
    completedLessons,
    totalLessons,
    progressPercent,
    hasStarted: completedLessons > 0,
    statusLine: `${fullName}: ${progressPercent}% completed`,
  };
}
