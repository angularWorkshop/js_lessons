import { describe, expect, it, vi } from 'vitest';
import { buildTaskSearchState, loadTaskDashboard } from '../../src/index.js';

describe('task manager async screen', () => {
  it('builds invalid and empty states correctly', () => {
    expect(buildTaskSearchState('a', { invalid: true })).toEqual({
      status: 'invalid',
      message: 'Enter at least 2 characters',
      items: [],
      canRetry: false,
      query: 'a',
    });

    expect(buildTaskSearchState('docs', { items: [] })).toEqual({
      status: 'empty',
      message: 'Nothing found',
      items: [],
      canRetry: false,
      query: 'docs',
    });
  });

  it('returns success state for valid api results', async () => {
    const api = {
      searchTasks: vi.fn(async query => ({
        items: [{ id: 'task-1', title: 'Write ' + query }],
      })),
    };

    await expect(loadTaskDashboard(api, ' docs ')).resolves.toEqual({
      status: 'success',
      message: 'Found tasks: 1',
      items: [{ id: 'task-1', title: 'Write docs' }],
      canRetry: false,
      query: 'docs',
    });
    expect(api.searchTasks).toHaveBeenCalledWith('docs');
  });

  it('returns error state when the api fails and skips invalid input', async () => {
    const api = {
      searchTasks: vi.fn(async () => {
        throw new Error('Network down');
      }),
    };

    await expect(loadTaskDashboard(api, 'x')).resolves.toEqual({
      status: 'invalid',
      message: 'Enter at least 2 characters',
      items: [],
      canRetry: false,
      query: 'x',
    });
    expect(api.searchTasks).not.toHaveBeenCalled();

    await expect(loadTaskDashboard(api, 'tasks')).resolves.toEqual({
      status: 'error',
      message: 'Network down',
      items: [],
      canRetry: true,
      query: 'tasks',
    });
  });
});
