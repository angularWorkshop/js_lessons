import { describe, expect, it } from 'vitest';
import {
  buildStatusState,
  getStatusLabel,
} from '../../src/index.js';

describe('status switch fallback', () => {
  it('returns labels for known status codes', () => {
    expect(getStatusLabel('draft')).toBe('Draft');
    expect(getStatusLabel('review')).toBe('In review');
    expect(getStatusLabel('published')).toBe('Published');
    expect(getStatusLabel('archived')).toBe('Archived');
  });

  it('uses the custom label for an unknown status', () => {
    expect(getStatusLabel('syncing', 'Waiting for sync')).toBe('Waiting for sync');
  });

  it('uses a nullish fallback for an unknown status', () => {
    expect(getStatusLabel('syncing', undefined)).toBe('Unknown status');
    expect(getStatusLabel('syncing', '')).toBe('');
  });

  it('builds a predictable status state object', () => {
    expect(buildStatusState('published')).toEqual({
      statusCode: 'published',
      customLabel: undefined,
      label: 'Published',
      displayLine: 'Status: Published',
    });
  });
});
