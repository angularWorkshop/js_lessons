'use strict';

export function serializeUserProgress(progress) {
  return JSON.stringify(progress);
}

export function restoreUserProgress(serialized) {
  return JSON.parse(serialized);
}

export function buildProgressSnapshotState(progress) {
  const serialized = serializeUserProgress(progress);
  const restored = restoreUserProgress(serialized);

  return {
    serialized,
    restoredUserName: restored.userName,
    restoredCompletedLessons: restored.completedLessons,
  };
}
