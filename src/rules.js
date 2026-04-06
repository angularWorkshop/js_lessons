'use strict';

export function resolveEnrollmentStatus(workshop) {
  if (!workshop.isPublished || workshop.seatsLeft <= 0) {
    return 'closed';
  }

  return 'open';
}

export function canShowCertificate(student) {
  return student.totalLessons > 0
    && student.completedLessons === student.totalLessons
    && student.finalScore >= 70;
}
