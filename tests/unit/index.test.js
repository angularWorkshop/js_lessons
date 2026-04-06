import { describe, expect, it } from 'vitest';
import { loadLessonsSuccessState } from '../../src/index.js';

describe('fetch json success state', () => {
  it('calls fetch with the expected url', async () => {
    const calls = [];
    const fetchImpl = url => {
      calls.push(url);
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ items: [] }),
      });
    };

    await loadLessonsSuccessState(fetchImpl);
    expect(calls).toEqual(['/api/lessons']);
  });

  it('returns lesson titles and a success message', async () => {
    const fetchImpl = () =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            items: [{ title: 'Fetch basics' }, { title: 'JSON state' }],
          }),
      });

    await expect(loadLessonsSuccessState(fetchImpl)).resolves.toEqual({
      status: 'success',
      lessonTitles: ['Fetch basics', 'JSON state'],
      message: 'Loaded 2 lessons',
    });
  });
});
