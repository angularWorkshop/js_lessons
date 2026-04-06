'use strict';

export function normalizeSearchQuery(rawValue) {
  return String(rawValue).trim().toLowerCase();
}

export function createSearchState(query, lessons) {
  if (query === 'error') {
    return {
      query,
      status: 'error',
      results: [],
      message: 'Search is temporarily unavailable',
    };
  }

  if (query.length < 2) {
    return {
      query,
      status: 'invalid',
      results: [],
      message: 'Enter at least 2 characters',
    };
  }

  const results = lessons.filter(item => item.title.toLowerCase().includes(query));

  if (results.length === 0) {
    return {
      query,
      status: 'empty',
      results: [],
      message: 'Nothing found',
    };
  }

  return {
    query,
    status: 'success',
    results,
    message: `Found ${results.length} lesson${results.length === 1 ? '' : 's'}`,
  };
}

export function syncSearchUI(root, state) {
  root.querySelector('[data-role="status"]').textContent = state.message;
  root.querySelector('[data-role="count"]').textContent = String(state.results.length);
}

export function buildSearchSnapshot(root, lessons) {
  const query = normalizeSearchQuery(root.querySelector('[data-role="query"]').value);
  const state = createSearchState(query, lessons);
  syncSearchUI(root, state);

  return {
    query: state.query,
    status: state.status,
    resultTitles: state.results.map(item => item.title),
    message: state.message,
  };
}
