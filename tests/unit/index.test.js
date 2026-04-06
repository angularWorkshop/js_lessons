import { describe, expect, it } from 'vitest';
import {
  createNotifier,
  createSavedFormatter,
  runLater,
} from '../../src/index.js';

describe('bound notifier callback', () => {
  it('returns a callback that keeps the notifier prefix', () => {
    const notifier = createNotifier('Saved');
    const formatter = createSavedFormatter(notifier);

    expect(runLater(formatter, 'Section 12 complete')).toBe('Saved: Section 12 complete');
  });

  it('does not execute the formatter during callback creation', () => {
    const notifier = createNotifier('Ready');
    const formatter = createSavedFormatter(notifier);

    expect(typeof formatter).toBe('function');
    expect(runLater(formatter, 'for review')).toBe('Ready: for review');
  });

  it('supports multiple future calls with the same bound context', () => {
    const formatter = createSavedFormatter(createNotifier('Queue'));

    expect(runLater(formatter, 'first')).toBe('Queue: first');
    expect(runLater(formatter, 'second')).toBe('Queue: second');
  });
});
