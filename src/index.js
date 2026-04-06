'use strict';

export function calculateAverageLessonMinutes(totalMinutes, lessonsCount) {
  // TODO: return 0 when lessonsCount is 0, otherwise calculate the average
  return 0;
}

export function formatAverageMinutes(averageMinutes) {
  // TODO: use toFixed(1) and return a string like '18.3 min'
  return '';
}

export function buildAverageDurationState(totalMinutes, lessonsCount) {
  const averageMinutes = calculateAverageLessonMinutes(totalMinutes, lessonsCount);

  return {
    totalMinutes,
    lessonsCount,
    averageMinutes,
    averageLabel: '', // TODO: use formatAverageMinutes
  };
}
