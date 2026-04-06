import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  buildSearchSnapshot,
  createSearchState,
  normalizeSearchQuery,
} from '../../src/index.js';

const lessons = [
  { id: 'dom', title: 'DOM basics' },
  { id: 'forms', title: 'Forms and validation' },
  { id: 'fetch', title: 'Fetch and JSON' },
];

function createSearchRoot(query = '  doM  ') {
  const documentRef = createFakeDocument();
  const root = createElement(documentRef, 'section');

  root.append(
    createElement(documentRef, 'input', {
      dataset: { role: 'query' },
      props: { value: query },
    }),
    createElement(documentRef, 'p', { dataset: { role: 'status' } }),
    createElement(documentRef, 'span', { dataset: { role: 'count' } }),
  );

  documentRef.body.append(root);
  return root;
}

describe('search form state', () => {
  it('normalizes search input before validation', () => {
    expect(normalizeSearchQuery('  DoM  ')).toBe('dom');
  });

  it('builds explicit invalid, empty, success, and error states', () => {
    expect(createSearchState('d', lessons)).toEqual({
      query: 'd',
      status: 'invalid',
      results: [],
      message: 'Enter at least 2 characters',
    });

    expect(createSearchState('unknown', lessons)).toEqual({
      query: 'unknown',
      status: 'empty',
      results: [],
      message: 'Nothing found',
    });

    expect(createSearchState('error', lessons)).toEqual({
      query: 'error',
      status: 'error',
      results: [],
      message: 'Search is temporarily unavailable',
    });
  });

  it('builds one snapshot and reflects success in the UI', () => {
    const root = createSearchRoot();
    const state = buildSearchSnapshot(root, lessons);

    expect(state).toEqual({
      query: 'dom',
      status: 'success',
      resultTitles: ['DOM basics'],
      message: 'Found 1 lesson',
    });
    expect(root.querySelector('[data-role="status"]').textContent).toBe('Found 1 lesson');
    expect(root.querySelector('[data-role="count"]').textContent).toBe('1');
  });
});
