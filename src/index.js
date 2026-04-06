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
  // TODO: normalize and save the draft
  void storage;
  void draft;
}

export function loadRegistrationDraft(storage) {
  // TODO: restore the saved draft safely or return defaults
  void storage;
}

export function clearRegistrationDraft(storage) {
  // TODO: remove the saved draft
  void storage;
}
