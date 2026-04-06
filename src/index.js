'use strict';

export function createWidgetState() {
  return {
    intervalId: null,
    clickHandler: null,
    destroyed: false,
  };
}

export function mountWidget(state, scheduler, target, onTick, onClick) {
  state.destroyed = false;
  state.intervalId = scheduler.setInterval(onTick, 1000);
  state.clickHandler = onClick;
  target.addEventListener('click', state.clickHandler);
}

export function destroyWidget(state, scheduler, target) {
  if (state.intervalId !== null) {
    scheduler.clearInterval(state.intervalId);
    state.intervalId = null;
  }

  if (state.clickHandler) {
    target.removeEventListener('click', state.clickHandler);
    state.clickHandler = null;
  }

  state.destroyed = true;
}
