'use strict';

export function createFallbackDraft() {
  return {
    title: 'Untitled draft',
    lessons: [],
    status: 'draft',
  };
}

export function isValidDraft(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      typeof value.title === 'string' &&
      Array.isArray(value.lessons) &&
      (value.status === 'draft' || value.status === 'ready')
  );
}

export function parseLessonDraft(jsonText) {
  // TODO: parse safely, validate shape, and return a stable fallback when needed
  void jsonText;
}

export function restoreDraftTitle(jsonText) {
  return parseLessonDraft(jsonText).title;
}
