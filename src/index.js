'use strict';

export function uniqueTags(tags) {
  return [...new Set(tags)];
}

export function buildLessonsIndex(lessons) {
  return new Map(
    lessons.map(lesson => [lesson.id, lesson.title]),
  );
}

export function buildLookupState(tags, lessons) {
  const unique = uniqueTags(tags);
  const index = buildLessonsIndex(lessons);

  return {
    uniqueTags: unique,
    uniqueCount: unique.length,
    titleById: index.get('js-2'),
  };
}
