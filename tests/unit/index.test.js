import { describe, expect, it } from 'vitest';
import { buildLessonScreenState } from '../../src/index.js';

describe('lesson screen state', () => {
  it('builds loading state', () => {
    expect(
      buildLessonScreenState({
        isLoading: true,
        errorMessage: '',
        items: ['Old item'],
      }),
    ).toEqual({
      status: 'loading',
      title: 'Загрузка уроков',
      canRetry: false,
      items: [],
    });
  });

  it('builds error state', () => {
    expect(
      buildLessonScreenState({
        isLoading: false,
        errorMessage: 'Не удалось загрузить уроки',
        items: ['Old item'],
      }),
    ).toEqual({
      status: 'error',
      title: 'Не удалось загрузить уроки',
      canRetry: true,
      items: [],
    });
  });

  it('builds empty state', () => {
    expect(
      buildLessonScreenState({
        isLoading: false,
        errorMessage: '',
        items: [],
      }),
    ).toEqual({
      status: 'empty',
      title: 'Уроков пока нет',
      canRetry: false,
      items: [],
    });
  });

  it('builds success state with copied items', () => {
    const items = ['Intro', 'DOM'];
    const result = buildLessonScreenState({
      isLoading: false,
      errorMessage: '',
      items,
    });

    expect(result).toEqual({
      status: 'success',
      title: 'Найдено уроков: 2',
      canRetry: false,
      items: ['Intro', 'DOM'],
    });
    expect(result.items).not.toBe(items);
  });
});
