'use strict';

export function buildLessonScreenState(input) {
  if (input.isLoading) {
    return {
      status: 'loading',
      title: 'Загрузка уроков',
      canRetry: false,
      items: [],
    };
  }

  if (input.errorMessage) {
    return {
      status: 'error',
      title: input.errorMessage,
      canRetry: true,
      items: [],
    };
  }

  if (input.items.length === 0) {
    return {
      status: 'empty',
      title: 'Уроков пока нет',
      canRetry: false,
      items: [],
    };
  }

  return {
    status: 'success',
    title: 'Найдено уроков: ' + input.items.length,
    canRetry: false,
    items: [...input.items],
  };
}
