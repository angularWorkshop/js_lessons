import { describe, expect, it, vi } from 'vitest';
import {
  buildReleaseSnapshot,
  createDashboardWidgetState,
  destroyDashboardWidget,
  mountDashboardWidget,
} from '../../src/index.js';

function createScheduler() {
  let nextId = 1;
  return {
    created: [],
    cleared: [],
    setInterval(callback, delay) {
      const id = nextId;
      nextId += 1;
      this.created.push({ id, callback, delay });
      return id;
    },
    clearInterval(id) {
      this.cleared.push(id);
    },
  };
}

function createTarget() {
  return {
    added: [],
    removed: [],
    addEventListener(type, handler) {
      this.added.push({ type, handler });
    },
    removeEventListener(type, handler) {
      this.removed.push({ type, handler });
    },
  };
}

describe('dashboard widget lifecycle', () => {
  it('mounts the widget and registers resources', () => {
    const state = createDashboardWidgetState();
    const scheduler = createScheduler();
    const target = createTarget();

    mountDashboardWidget(state, scheduler, target, vi.fn(), vi.fn());

    expect(state.mounted).toBe(true);
    expect(state.intervalId).toBe(1);
    expect(target.added).toHaveLength(1);
  });

  it('destroys the widget safely and idempotently', () => {
    const state = createDashboardWidgetState();
    const scheduler = createScheduler();
    const target = createTarget();
    const onClick = vi.fn();

    mountDashboardWidget(state, scheduler, target, vi.fn(), onClick);
    destroyDashboardWidget(state, scheduler, target);
    destroyDashboardWidget(state, scheduler, target);

    expect(state).toEqual({
      intervalId: null,
      clickHandler: null,
      mounted: false,
    });
    expect(scheduler.cleared).toEqual([1]);
    expect(target.removed).toEqual([{ type: 'click', handler: onClick }]);
  });

  it('builds a release snapshot from checks and active resources', () => {
    expect(
      buildReleaseSnapshot(
        [
          { name: 'tests', passed: true },
          { name: 'security', passed: false },
        ],
        { intervalId: 2, clickHandler: () => {}, mounted: true },
      ),
    ).toEqual({
      failedChecks: ['security'],
      activeResources: 2,
      canRelease: false,
      mounted: true,
    });

    expect(
      buildReleaseSnapshot(
        [
          { name: 'tests', passed: true },
          { name: 'security', passed: true },
        ],
        { intervalId: null, clickHandler: null, mounted: false },
      ),
    ).toEqual({
      failedChecks: [],
      activeResources: 0,
      canRelease: true,
      mounted: false,
    });
  });
});
