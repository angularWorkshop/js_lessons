'use strict';

export function createProgressState(max) {
  return {
    value: 0,
    max,
    status: 'idle',
    intervalId: null,
  };
}

export function startProgress(state, scheduler, step, delay) {
  state.status = 'running';
  state.intervalId = scheduler.setInterval(() => {
    state.value = Math.min(state.max, state.value + step);

    if (state.value === state.max) {
      scheduler.clearInterval(state.intervalId);
      state.intervalId = null;
      state.status = 'done';
    }
  }, delay);
}

export function stopProgress(state, scheduler) {
  if (state.intervalId !== null) {
    scheduler.clearInterval(state.intervalId);
    state.intervalId = null;
  }

  state.status = 'stopped';
}
