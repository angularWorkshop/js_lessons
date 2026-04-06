'use strict';

import { formatCurrency, formatDifficulty } from './formatters.js';
import { canShowCertificate, resolveEnrollmentStatus } from './rules.js';

export function buildWorkshopReport(workshop, student) {
  return {
    title: workshop.title,
    priceLabel: formatCurrency(workshop.price),
    difficultyLabel: formatDifficulty(workshop.level),
    enrollmentStatus: resolveEnrollmentStatus(workshop),
    canGetCertificate: canShowCertificate(student),
  };
}
