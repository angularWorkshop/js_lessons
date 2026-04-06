'use strict';

export function calculateRemainingLessons(completedLessons, totalLessons) {
  return totalLessons - completedLessons;
}

export function buildProgressLabel(completedLessons, totalLessons) {
  return `Progress: ${completedLessons}/${totalLessons}`;
}
