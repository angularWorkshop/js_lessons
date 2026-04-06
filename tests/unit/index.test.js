import { describe, expect, it } from 'vitest';
import { loadDashboardAsync } from '../../src/index.js';

describe('async dashboard fallback', () => {
  it('returns a ready summary on success', async () => {
    const api = {
      loadCourse() {
        return Promise.resolve({ id: 'course-1', title: 'Server Workflows' });
      },
      loadLessons() {
        return Promise.resolve([{ id: 1 }, { id: 2 }]);
      },
    };

    await expect(loadDashboardAsync(api)).resolves.toEqual({
      courseTitle: 'Server Workflows',
      lessonCount: 2,
      status: 'ready',
    });
  });

  it('returns a stable fallback object when loading fails', async () => {
    const api = {
      loadCourse() {
        return Promise.reject(new Error('offline'));
      },
      loadLessons() {
        return Promise.resolve([]);
      },
    };

    await expect(loadDashboardAsync(api)).resolves.toEqual({
      courseTitle: '',
      lessonCount: 0,
      status: 'error',
    });
  });
});
