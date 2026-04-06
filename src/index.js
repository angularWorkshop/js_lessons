'use strict';

export const TASK_VIEW_KEY = 'js-task-manager:view';

export function createTaskManagerState(tasks = [], filter = 'all', draft = '') {
  return {
    tasks,
    filter,
    draft,
  };
}

export function addTask(state, title) {
  const normalizedTitle = String(title ?? '').trim();
  if (!normalizedTitle) {
    return state;
  }

  const nextId = 'task-' + (state.tasks.length + 1);

  return {
    ...state,
    tasks: [...state.tasks, { id: nextId, title: normalizedTitle, done: false }],
    draft: '',
  };
}

export function toggleTask(state, taskId) {
  return {
    ...state,
    tasks: state.tasks.map(task => (
      task.id === taskId
        ? { ...task, done: !task.done }
        : task
    )),
  };
}

export function getVisibleTasks(state) {
  if (state.filter === 'active') {
    return state.tasks.filter(task => !task.done);
  }

  if (state.filter === 'completed') {
    return state.tasks.filter(task => task.done);
  }

  return state.tasks;
}

export function saveTaskView(storage, state) {
  const saved = {
    filter: state.filter,
    draft: state.draft,
  };

  storage.setItem(TASK_VIEW_KEY, JSON.stringify(saved));
  return saved;
}

export function loadTaskView(storage) {
  const raw = storage.getItem(TASK_VIEW_KEY);
  if (!raw) {
    return { filter: 'all', draft: '' };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      filter: parsed.filter === 'active' || parsed.filter === 'completed' ? parsed.filter : 'all',
      draft: typeof parsed.draft === 'string' ? parsed.draft : '',
    };
  } catch {
    return { filter: 'all', draft: '' };
  }
}
