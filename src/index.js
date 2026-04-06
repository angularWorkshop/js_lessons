'use strict';

export function createReminderState(message) {
  return {
    message,
    status: 'idle',
    timerId: null,
    firedCount: 0,
    lastDelivered: '',
  };
}

export function startReminder(state, scheduler, delay) {
  if (state.timerId !== null) {
    scheduler.clearTimeout(state.timerId);
  }

  state.status = 'scheduled';
  state.timerId = scheduler.setTimeout(() => {
    state.status = 'done';
    state.lastDelivered = state.message;
    state.firedCount += 1;
    state.timerId = null;
  }, delay);
}

export function stopReminder(state, scheduler) {
  if (state.timerId !== null) {
    scheduler.clearTimeout(state.timerId);
    state.timerId = null;
  }

  state.status = 'stopped';
}
