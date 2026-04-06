import { describe, expect, it } from 'vitest';
import { loadDashboardWithPromise } from '../../src/index.js';

describe('promise dashboard chain', () => {
  it('loads a course and then loads lessons by course id', async () => {
    const calls = [];
    const api = {
      loadCourse() {
        calls.push('course');
        return Promise.resolve({ id: 'async-js', title: 'Async JavaScript' });
      },
      loadLessons(courseId) {
        calls.push(`lessons:${courseId}`);
        return Promise.resolve([{ id: 1 }, { id: 2 }, { id: 3 }]);
      },
    };

    const result = await loadDashboardWithPromise(api);

    expect(calls).toEqual(['course', 'lessons:async-js']);
    expect(result).toEqual({
      courseTitle: 'Async JavaScript',
      lessonCount: 3,
      status: 'ready',
    });
  });

  it('uses the course id from the previous step', async () => {
    const api = {
      loadCourse() {
        return Promise.resolve({ id: 'promises', title: 'Promises' });
      },
      loadLessons(courseId) {
        return Promise.resolve([{ id: courseId }]);
      },
    };

    const result = await loadDashboardWithPromise(api);

    expect(result.lessonCount).toBe(1);
    expect(result.courseTitle).toBe('Promises');
  });
});
