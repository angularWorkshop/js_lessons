'use strict';

export async function loadLessonsSuccessState(fetchImpl) {
  const response = await fetchImpl('/api/lessons');

  if (!response.ok) {
    throw new Error('Request failed');
  }

  const data = await response.json();

  return {
    status: 'success',
    lessonTitles: data.items.map(item => item.title),
    message: `Loaded ${data.items.length} lessons`,
  };
}
