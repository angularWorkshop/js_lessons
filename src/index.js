'use strict';

export const TASK_VIEW_KEY = 'js-task-manager:view';

export function createTaskManagerState(tasks = [], filter = 'all', draft = '') {
  // TODO: return the base task-manager state
  void tasks;
  void filter;
  void draft;
}

export function addTask(state, title) {
  // TODO: trim title, ignore empty input, and add a new task with the next stable id
  void state;
  void title;
}

export function toggleTask(state, taskId) {
  // TODO: toggle done for the matching task and keep the rest untouched
  void state;
  void taskId;
}

export function getVisibleTasks(state) {
  // TODO: return tasks for all/active/completed filters
  void state;
}

export function saveTaskView(storage, state) {
  // TODO: store filter and draft in storage and return the saved shape
  void storage;
  void state;
}

export function loadTaskView(storage) {
  // TODO: read the saved view with a safe fallback
  void storage;
}
