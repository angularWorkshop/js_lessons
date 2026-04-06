'use strict';

export function createWidgetState() {
  return {
    intervalId: null,
    clickHandler: null,
    destroyed: false,
  };
}

export function mountWidget(state, scheduler, target, onTick, onClick) {
  // TODO: register the interval and listener once
  void state;
  void scheduler;
  void target;
  void onTick;
  void onClick;
}

export function destroyWidget(state, scheduler, target) {
  // TODO: clear the interval and remove the listener safely
  void state;
  void scheduler;
  void target;
}
