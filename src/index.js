'use strict';

export const DRAFT_KEY = 'registration-draft';

export function createEmptyDraft() {
  return {
    name: '',
    email: '',
    note: '',
  };
}

export function normalizeDraft(value) {
  return {
    name: typeof value?.name === 'string' ? value.name.trim() : '',
    email: typeof value?.email === 'string' ? value.email.trim() : '',
    note: typeof value?.note === 'string' ? value.note : '',
  };
}

export function saveRegistrationDraft(storage, draft) {
  const normalized = normalizeDraft(draft);
  storage.setItem(DRAFT_KEY, JSON.stringify(normalized));
  return normalized;
}

export function loadRegistrationDraft(storage) {
  const raw = storage.getItem(DRAFT_KEY);
  if (!raw) {
    return createEmptyDraft();
  }

  try {
    const parsed = JSON.parse(raw);
    return normalizeDraft(parsed);
  } catch {
    return createEmptyDraft();
  }
}

export function clearRegistrationDraft(storage) {
  storage.removeItem(DRAFT_KEY);
}
