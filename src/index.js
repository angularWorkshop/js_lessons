'use strict';

export function* createLazyRange(from, to, step = 1) {
  if (step === 0) {
    throw new Error('Step must not be zero');
  }

  if (from <= to) {
    for (let current = from; current <= to; current += Math.abs(step)) {
      yield current;
    }
    return;
  }

  for (let current = from; current >= to; current -= Math.abs(step)) {
    yield current;
  }
}
