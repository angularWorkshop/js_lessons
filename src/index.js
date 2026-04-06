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
  try {
    const parsed = JSON.parse(jsonText);

    if (!isValidDraft(parsed)) {
      return createFallbackDraft();
    }

    return {
      title: parsed.title,
      lessons: [...parsed.lessons],
      status: parsed.status,
    };
  } catch {
    return createFallbackDraft();
  }
}

export function restoreDraftTitle(jsonText) {
  return parseLessonDraft(jsonText).title;
}
