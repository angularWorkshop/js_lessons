'use strict';

export function normalizeSearchQuery(rawValue) {
  // TODO: normalize user input before validation
  return '';
}

export function createSearchState(query, lessons) {
  // TODO: build one explicit search state object
  void lessons;
  return {
    query,
    status: 'invalid',
    results: [],
    message: '',
  };
}

export function syncSearchUI(root, state) {
  const statusNode = root.querySelector('[data-role="status"]');
  const countNode = root.querySelector('[data-role="count"]');

  // TODO: reflect state in the UI
  void statusNode;
  void countNode;
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
