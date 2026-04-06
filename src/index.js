'use strict';

export function createCounter(start = 0) {
  let current = start;

  return {
    increment() {
      current += 1;
    },
    getValue() {
      return current;
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
    independent: lessonCounter.getValue() !== projectCounter.getValue(),
  };
}
