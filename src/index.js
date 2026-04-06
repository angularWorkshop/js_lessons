'use strict';

export async function loadLessonsWithFallback(fetchImpl) {
  try {
    const response = await fetchImpl('/api/lessons');

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    if (data.items.length === 0) {
      return {
        status: 'empty',
        lessonTitles: [],
        message: 'No lessons yet',
      };
    }

    return {
      status: 'success',
      lessonTitles: data.items.map(item => item.title),
      message: 'Loaded lessons',
    };
  } catch {
    return {
      status: 'error',
      lessonTitles: [],
      message: 'Could not load lessons',
    };
  }
}
