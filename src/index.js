'use strict';

export function loadDashboardWithPromise(api) {
  // TODO: chain api.loadCourse() and api.loadLessons(course.id)
  void api;
  return Promise.resolve({
    courseTitle: '',
    lessonCount: 0,
    status: 'ready',
  });
}
