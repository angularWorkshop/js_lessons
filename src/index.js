'use strict';

export const PREFERENCES_KEY = 'course-ui-preferences';

export function createDefaultPreferences() {
  return {
    theme: 'light',
    onlyCompleted: false,
    query: '',
  };
}

export function normalizePreferences(value) {
  return {
    theme: value?.theme === 'dark' ? 'dark' : 'light',
    onlyCompleted: value?.onlyCompleted === true,
    query: typeof value?.query === 'string' ? value.query : '',
  };
}

export function savePreferences(storage, value) {
  const normalized = normalizePreferences(value);
  storage.setItem(PREFERENCES_KEY, JSON.stringify(normalized));
  return normalized;
}

export function loadPreferences(storage) {
  const raw = storage.getItem(PREFERENCES_KEY);
  if (!raw) {
    return createDefaultPreferences();
  }

  try {
    const parsed = JSON.parse(raw);
    return normalizePreferences(parsed);
  } catch {
    return createDefaultPreferences();
  }
}
