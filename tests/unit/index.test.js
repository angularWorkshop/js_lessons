import { describe, expect, it } from 'vitest';
import {
  createProgressState,
  startProgress,
  stopProgress,
} from '../../src/index.js';

function createScheduler() {
  let nextId = 1;
  const tasks = new Map();

  return {
    setInterval(callback, delay) {
      const id = nextId++;
      tasks.set(id, { callback, delay });
      return id;
    },
    clearInterval(id) {
      tasks.delete(id);
    },
    tick(times = 1) {
      for (let index = 0; index < times; index += 1) {
        for (const task of [...tasks.values()]) {
          task.callback();
        }
      }
    },
    pendingCount() {
      return tasks.size;
    },
  };
}

describe('progress interval', () => {
  it('starts progress and moves state to running', () => {
    const scheduler = createScheduler();
    const state = createProgressState(10);

    startProgress(state, scheduler, 2, 100);

    expect(state.status).toBe('running');
    expect(state.intervalId).not.toBe(null);
    expect(scheduler.pendingCount()).toBe(1);
  });

  it('increments progress on each tick and stops at max', () => {
    const scheduler = createScheduler();
    const state = createProgressState(6);

    startProgress(state, scheduler, 2, 100);
    scheduler.tick(3);

    expect(state.value).toBe(6);
    expect(state.status).toBe('done');
    expect(state.intervalId).toBe(null);
    expect(scheduler.pendingCount()).toBe(0);
  });

  it('can stop progress manually before completion', () => {
    const scheduler = createScheduler();
    const state = createProgressState(10);

    startProgress(state, scheduler, 2, 100);
    stopProgress(state, scheduler);

    expect(state.status).toBe('stopped');
    expect(state.intervalId).toBe(null);
    expect(scheduler.pendingCount()).toBe(0);
  });
});
