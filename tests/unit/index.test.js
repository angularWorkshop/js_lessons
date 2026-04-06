import { describe, expect, it } from 'vitest';
import {
  TASK_VIEW_KEY,
  addTask,
  createTaskManagerState,
  getVisibleTasks,
  loadTaskView,
  saveTaskView,
  toggleTask,
} from '../../src/index.js';

function createStorage(initial = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem(key) {
      return map.has(key) ? map.get(key) : null;
    },
    setItem(key, value) {
      map.set(key, value);
    },
  };
}

describe('task manager state and storage', () => {
  it('creates base state and adds tasks predictably', () => {
    const state = createTaskManagerState([], 'all', 'Write tests');
    const next = addTask(state, '  Review PR  ');

    expect(next).toEqual({
      tasks: [{ id: 'task-1', title: 'Review PR', done: false }],
      filter: 'all',
      draft: '',
    });
  });

  it('toggles tasks and filters visible items', () => {
    const state = {
      tasks: [
        { id: 'task-1', title: 'Write docs', done: false },
        { id: 'task-2', title: 'Ship patch', done: true },
      ],
      filter: 'active',
      draft: '',
    };

    const toggled = toggleTask(state, 'task-1');
    expect(toggled.tasks[0].done).toBe(true);
    expect(getVisibleTasks(state)).toEqual([{ id: 'task-1', title: 'Write docs', done: false }]);
    expect(getVisibleTasks({ ...state, filter: 'completed' })).toEqual([{ id: 'task-2', title: 'Ship patch', done: true }]);
  });

  it('saves and restores the user view', () => {
    const storage = createStorage();
    const state = {
      tasks: [],
      filter: 'completed',
      draft: 'Find bug',
    };

    expect(saveTaskView(storage, state)).toEqual({
      filter: 'completed',
      draft: 'Find bug',
    });
    expect(JSON.parse(storage.getItem(TASK_VIEW_KEY))).toEqual({
      filter: 'completed',
      draft: 'Find bug',
    });
    expect(loadTaskView(storage)).toEqual({
      filter: 'completed',
      draft: 'Find bug',
    });
  });

  it('falls back safely on broken storage data', () => {
    const storage = createStorage({ [TASK_VIEW_KEY]: '{broken json' });
    expect(loadTaskView(storage)).toEqual({
      filter: 'all',
      draft: '',
    });
  });
});
