'use strict';

export async function loadLessonsSuccessState(fetchImpl) {
  // TODO: fetch lessons, validate response, parse JSON, and return success state
  void fetchImpl;
  return {
    status: 'success',
    lessonTitles: [],
    message: '',
  };
}
