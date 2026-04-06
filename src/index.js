'use strict';

export function uniqueTags(tags) {
  // TODO: return an array without duplicates
  return [];
}

export function buildLessonsIndex(lessons) {
  // TODO: return a Map with lesson.id as key and lesson.title as value
  return new Map();
}

export function buildLookupState(tags, lessons) {
  const unique = uniqueTags(tags);
  const index = buildLessonsIndex(lessons);

  return {
    uniqueTags: unique,
    uniqueCount: 0, // TODO: number of unique tags
    titleById: '', // TODO: title for lesson id "js-2"
  };
}
