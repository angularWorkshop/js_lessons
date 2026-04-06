'use strict';

import { buildStudentCard } from './student-card.js';

export function buildWorkshopDashboardState(name, completedLessons, totalLessons) {
  const card = buildStudentCard(name, completedLessons, totalLessons);

  return {
    card,
    readyToContinue: card.remainingLessons > 0,
  };
}
