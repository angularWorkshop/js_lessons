'use strict';

export function serializeUserProgress(progress) {
  // TODO: convert the object to a JSON string
  return '';
}

export function restoreUserProgress(serialized) {
  // TODO: restore the object from JSON
  return {};
}

export function buildProgressSnapshotState(progress) {
  const serialized = serializeUserProgress(progress);
  const restored = restoreUserProgress(serialized);

  return {
    serialized,
    restoredUserName: restored.userName ?? '',
    restoredCompletedLessons: restored.completedLessons ?? null,
  };
}
