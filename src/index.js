'use strict';

export async function loadLessonsWithFallback(fetchImpl) {
  // TODO: separate success, empty, and error states
  void fetchImpl;
  return {
    status: 'error',
    lessonTitles: [],
    message: '',
  };
}
