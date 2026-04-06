'use strict';

export function calculateAverageLessonMinutes(totalMinutes, lessonsCount) {
  if (lessonsCount === 0) {
    return 0;
  }

  return totalMinutes / lessonsCount;
}

export function formatAverageMinutes(averageMinutes) {
  return `${averageMinutes.toFixed(1)} min`;
}

export function buildAverageDurationState(totalMinutes, lessonsCount) {
  const averageMinutes = calculateAverageLessonMinutes(totalMinutes, lessonsCount);

  return {
    totalMinutes,
    lessonsCount,
    averageMinutes,
    averageLabel: formatAverageMinutes(averageMinutes),
  };
}
