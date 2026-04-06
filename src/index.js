'use strict';

export function createDashboardWidgetState() {
  return {
    intervalId: null,
    clickHandler: null,
    mounted: false,
  };
}

export function mountDashboardWidget(state, scheduler, target, onRefresh, onFilterClick) {
  state.intervalId = scheduler.setInterval(onRefresh, 1000);
  state.clickHandler = onFilterClick;
  target.addEventListener('click', state.clickHandler);
  state.mounted = true;
}

export function destroyDashboardWidget(state, scheduler, target) {
  if (state.intervalId !== null) {
    scheduler.clearInterval(state.intervalId);
    state.intervalId = null;
  }

  if (state.clickHandler) {
    target.removeEventListener('click', state.clickHandler);
    state.clickHandler = null;
  }

  state.mounted = false;
}

export function buildReleaseSnapshot(checks, state) {
  const failedChecks = checks.filter(item => !item.passed).map(item => item.name);
  const activeResources = Number(state.intervalId !== null) + Number(Boolean(state.clickHandler));

  return {
    failedChecks,
    activeResources,
    canRelease: failedChecks.length === 0 && activeResources === 0,
    mounted: state.mounted,
  };
}
