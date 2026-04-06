import { describe, expect, it } from 'vitest';
import {
  buildCounterState,
  createCounter,
} from '../../src/index.js';

describe('counter with private state', () => {
  it('increments and returns the current value', () => {
    const counter = createCounter(2);

    counter.increment();
    counter.increment();

    expect(counter.getValue()).toBe(4);
  });

  it('keeps state private for each counter instance', () => {
    const first = createCounter(0);
    const second = createCounter(10);

    first.increment();
    second.increment();
    second.increment();

    expect(first.getValue()).toBe(1);
    expect(second.getValue()).toBe(12);
  });

  it('builds a predictable state from two separate counters', () => {
    expect(buildCounterState()).toEqual({
      lessonValue: 3,
      projectValue: 11,
      independent: true,
    });
  });
});
