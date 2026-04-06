import { describe, expect, it } from 'vitest';
import { createWidgetState, destroyWidget, mountWidget } from '../../src/index.js';

function createScheduler() {
  let nextId = 1;
  const active = new Set();
  return {
    setInterval() {
      const id = nextId++;
      active.add(id);
      return id;
    },
    clearInterval(id) {
      active.delete(id);
    },
    has(id) {
      return active.has(id);
    },
  };
}

function createTarget() {
  const listeners = new Map();
  return {
    addEventListener(type, callback) {
      listeners.set(type, callback);
    },
    removeEventListener(type, callback) {
      if (listeners.get(type) === callback) {
        listeners.delete(type);
      }
    },
    has(type) {
      return listeners.has(type);
    },
  };
}

describe('widget cleanup', () => {
  it('registers interval and listener during mount', () => {
    const state = createWidgetState();
    const scheduler = createScheduler();
    const target = createTarget();
    const onClick = () => {};

    mountWidget(state, scheduler, target, () => {}, onClick);

    expect(state.intervalId).not.toBe(null);
    expect(scheduler.has(state.intervalId)).toBe(true);
    expect(target.has('click')).toBe(true);
  });

  it('cleans both resources in destroy', () => {
    const state = createWidgetState();
    const scheduler = createScheduler();
    const target = createTarget();
    const onClick = () => {};

    mountWidget(state, scheduler, target, () => {}, onClick);
    const intervalId = state.intervalId;
    destroyWidget(state, scheduler, target);

    expect(scheduler.has(intervalId)).toBe(false);
    expect(target.has('click')).toBe(false);
    expect(state.destroyed).toBe(true);
  });

  it('keeps destroy safe when called twice', () => {
    const state = createWidgetState();
    const scheduler = createScheduler();
    const target = createTarget();

    mountWidget(state, scheduler, target, () => {}, () => {});
    destroyWidget(state, scheduler, target);
    destroyWidget(state, scheduler, target);

    expect(state.intervalId).toBe(null);
    expect(state.clickHandler).toBe(null);
    expect(state.destroyed).toBe(true);
  });
});
