'use strict';

export function buildLessonNumbers(firstLesson, lastLesson) {
  const lessonNumbers = [];
  let current = firstLesson;

  // TODO: use a while loop to push every number from firstLesson to lastLesson

  return lessonNumbers;
}

export function buildLessonPlanState(firstLesson, lastLesson) {
  const lessonNumbers = buildLessonNumbers(firstLesson, lastLesson);

  return {
    firstLesson,
    lastLesson,
    lessonNumbers,
    count: 0, // TODO: calculate the number of lessons in the array
    label: `Lessons ${firstLesson}-${lastLesson}: ${lessonNumbers.join(', ')}`,
  };
}
