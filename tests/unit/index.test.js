import { describe, expect, it } from 'vitest';
import { loadLessonsWithFallback } from '../../src/index.js';

describe('fetch fallback states', () => {
  it('returns success when lessons are loaded', async () => {
    const fetchImpl = () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ items: [{ title: 'Async UI' }] }),
      });

    await expect(loadLessonsWithFallback(fetchImpl)).resolves.toEqual({
      status: 'success',
      lessonTitles: ['Async UI'],
      message: 'Loaded lessons',
    });
  });

  it('returns empty when the response is ok but has no items', async () => {
    const fetchImpl = () =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ items: [] }),
      });

    await expect(loadLessonsWithFallback(fetchImpl)).resolves.toEqual({
      status: 'empty',
      lessonTitles: [],
      message: 'No lessons yet',
    });
  });

  it('returns error when the request fails', async () => {
    const fetchImpl = () => Promise.reject(new Error('offline'));

    await expect(loadLessonsWithFallback(fetchImpl)).resolves.toEqual({
      status: 'error',
      lessonTitles: [],
      message: 'Could not load lessons',
    });
  });
});
