'use strict';

export function createEditableProfile(profile) {
  // TODO: return a separate copy of the object
  return profile;
}

export function renameDraftProfile(profile, newName) {
  const draft = createEditableProfile(profile);
  draft.displayName = newName;
  return draft;
}

export function buildReferenceBugState(profile, newName) {
  const draft = renameDraftProfile(profile, newName);

  return {
    originalName: profile.displayName,
    draftName: draft.displayName,
    sameReference: profile === draft,
  };
}
