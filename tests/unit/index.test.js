import { describe, expect, it } from 'vitest';
import {
  displayName,
  finishedLessons,
  hasMentorAccess,
  mentorNote,
  nextLessonId,
  studentTypeState,
} from '../../src/index.js';

describe('basic values', () => {
  it('keeps the expected values', () => {
    expect(displayName).toBe('Mila');
    expect(finishedLessons).toBe(2);
    expect(hasMentorAccess).toBe(false);
    expect(mentorNote).toBeNull();
    expect(nextLessonId).toBeUndefined();
  });

  it('keeps the expected types', () => {
    expect(typeof displayName).toBe('string');
    expect(typeof finishedLessons).toBe('number');
    expect(typeof hasMentorAccess).toBe('boolean');
    expect(mentorNote).toBeNull();
    expect(nextLessonId).toBeUndefined();
  });

  it('returns a complete state object', () => {
    expect(studentTypeState).toEqual({
      displayName: 'Mila',
      finishedLessons: 2,
      hasMentorAccess: false,
      mentorNote: null,
      nextLessonId: undefined,
    });
  });
});