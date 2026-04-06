'use strict';

export async function loadDashboardAsync(api) {
  try {
    const course = await api.loadCourse();
    const lessons = await api.loadLessons(course.id);

    return {
      courseTitle: course.title,
      lessonCount: lessons.length,
      status: 'ready',
    };
  } catch {
    return {
      courseTitle: '',
      lessonCount: 0,
      status: 'error',
    };
  }
}
