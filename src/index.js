'use strict';

export function buildLessonNumbers(firstLesson, lastLesson) {
  const lessonNumbers = [];
  let current = firstLesson;

  while (current <= lastLesson) {
    lessonNumbers.push(current);
    current += 1;
  }

  return lessonNumbers;
}

export function buildLessonPlanState(firstLesson, lastLesson) {
  const lessonNumbers = buildLessonNumbers(firstLesson, lastLesson);

  return {
    firstLesson,
    lastLesson,
    lessonNumbers,
    count: lessonNumbers.length,
    label: `Lessons ${firstLesson}-${lastLesson}: ${lessonNumbers.join(', ')}`,
  };
}
