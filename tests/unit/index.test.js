import { describe, expect, it } from 'vitest';
import {
  createReminderState,
  startReminder,
  stopReminder,
} from '../../src/index.js';

function createScheduler() {
  let nextId = 1;
  const tasks = new Map();

  return {
    setTimeout(callback, delay) {
      const id = nextId++;
      tasks.set(id, { callback, delay });
      return id;
    },
    clearTimeout(id) {
      tasks.delete(id);
    },
    runById(id) {
      const task = tasks.get(id);
      if (!task) {
        return;
      }
      tasks.delete(id);
      task.callback();
    },
    pendingCount() {
      return tasks.size;
    },
  };
}

describe('reminder timeout state', () => {
  it('schedules a reminder and marks it as scheduled', () => {
    const scheduler = createScheduler();
    const state = createReminderState('Drink water');

    startReminder(state, scheduler, 500);

    expect(state.status).toBe('scheduled');
    expect(state.timerId).not.toBe(null);
    expect(scheduler.pendingCount()).toBe(1);
  });

  it('moves the reminder to done when the timeout fires', () => {
    const scheduler = createScheduler();
    const state = createReminderState('Stretch');

    startReminder(state, scheduler, 500);
    const timerId = state.timerId;
    scheduler.runById(timerId);

    expect(state.status).toBe('done');
    expect(state.lastDelivered).toBe('Stretch');
    expect(state.firedCount).toBe(1);
    expect(state.timerId).toBe(null);
  });

  it('can stop a scheduled reminder before it fires', () => {
    const scheduler = createScheduler();
    const state = createReminderState('Pause');

    startReminder(state, scheduler, 300);
    stopReminder(state, scheduler);

    expect(state.status).toBe('stopped');
    expect(state.timerId).toBe(null);
    expect(scheduler.pendingCount()).toBe(0);
  });
});
