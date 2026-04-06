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
  // TODO: start an interval and move the state through running -> done
  void state;
  void scheduler;
  void step;
  void delay;
}

export function stopProgress(state, scheduler) {
  // TODO: stop an active interval and move state to stopped
  void state;
  void scheduler;
}
