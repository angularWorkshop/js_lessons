'use strict';

export function buildTaskSearchState(query, result) {
  if (result.invalid) {
    return {
      status: 'invalid',
      message: 'Enter at least 2 characters',
      items: [],
      canRetry: false,
      query,
    };
  }

  if (result.error) {
    return {
      status: 'error',
      message: result.error,
      items: [],
      canRetry: true,
      query,
    };
  }

  if (!result.items || result.items.length === 0) {
    return {
      status: 'empty',
      message: 'Nothing found',
      items: [],
      canRetry: false,
      query,
    };
  }

  return {
    status: 'success',
    message: 'Found tasks: ' + result.items.length,
    items: result.items,
    canRetry: false,
    query,
  };
}

export async function loadTaskDashboard(api, query) {
  const normalizedQuery = String(query ?? '').trim();

  if (normalizedQuery.length < 2) {
    return buildTaskSearchState(normalizedQuery, { invalid: true });
  }

  try {
    const result = await api.searchTasks(normalizedQuery);
    return buildTaskSearchState(normalizedQuery, result);
  } catch (error) {
    return buildTaskSearchState(normalizedQuery, {
      error: String(error?.message ?? error),
    });
  }
}
