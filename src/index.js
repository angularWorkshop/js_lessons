'use strict';

export function loadDashboardWithPromise(api) {
  return api.loadCourse().then(course => {
    return api.loadLessons(course.id).then(lessons => ({
      courseTitle: course.title,
      lessonCount: lessons.length,
      status: 'ready',
    }));
  });
}
