'use strict';

import { DEFAULT_TRACK } from './constants.js';
import {
  buildProgressLabel,
  calculateRemainingLessons,
} from './progress.js';

export function buildStudentCard(name, completedLessons, totalLessons) {
  const studentName = name.trim();

  return {
    studentName,
    track: DEFAULT_TRACK,
    completedLessons,
    totalLessons,
    remainingLessons: calculateRemainingLessons(completedLessons, totalLessons),
    label: buildProgressLabel(completedLessons, totalLessons),
  };
}
