'use strict';

export function createCounter(start = 0) {
  let current = start;

  return {
    increment() {
      // TODO: increase current by 1
    },
    getValue() {
      // TODO: return the current value
      return null;
    },
  };
}

export function buildCounterState() {
  const lessonCounter = createCounter(1);
  const projectCounter = createCounter(10);

  lessonCounter.increment();
  lessonCounter.increment();
  projectCounter.increment();

  return {
    lessonValue: lessonCounter.getValue(),
    projectValue: projectCounter.getValue(),
    independent: false, // TODO: compare both counters and show that they keep separate state
  };
}
