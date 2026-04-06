import { describe, expect, it } from 'vitest';
import {
  buildLessonNumbers,
  buildLessonPlanState,
} from '../../src/index.js';

describe('lesson numbers while loop', () => {
  it('builds all numbers in the lesson range', () => {
    expect(buildLessonNumbers(2, 5)).toEqual([2, 3, 4, 5]);
  });

  it('keeps a one-item range stable', () => {
    expect(buildLessonNumbers(7, 7)).toEqual([7]);
  });

  it('builds a predictable lesson plan state object', () => {
    expect(buildLessonPlanState(3, 6)).toEqual({
      firstLesson: 3,
      lastLesson: 6,
      lessonNumbers: [3, 4, 5, 6],
      count: 4,
      label: 'Lessons 3-6: 3, 4, 5, 6',
    });
  });
});
