import { describe, expect, it } from 'vitest';
import {
  buildProgressSnapshotState,
  restoreUserProgress,
  serializeUserProgress,
} from '../../src/index.js';

const progress = {
  userName: 'Max',
  completedLessons: 3,
  tags: ['intro', 'objects'],
};

describe('save and restore user progress with JSON', () => {
  it('serializes the progress object to a string', () => {
    expect(serializeUserProgress(progress)).toBe(JSON.stringify(progress));
  });

  it('restores the same progress object from JSON', () => {
    expect(restoreUserProgress(JSON.stringify(progress))).toEqual(progress);
  });

  it('builds a snapshot state from serialized and restored data', () => {
    expect(buildProgressSnapshotState(progress)).toEqual({
      serialized: JSON.stringify(progress),
      restoredUserName: 'Max',
      restoredCompletedLessons: 3,
    });
  });
});
