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
  // TODO: cancel an existing timeout, then schedule a new one
  void scheduler;
  void delay;
}

export function stopReminder(state, scheduler) {
  // TODO: cancel an active timeout and move state to stopped
  void state;
  void scheduler;
}
