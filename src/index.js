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
  // TODO: normalize preferences, store them as JSON, and return the normalized object
  void storage;
  void value;
}

export function loadPreferences(storage) {
  // TODO: restore preferences safely or return defaults
  void storage;
}
