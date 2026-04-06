import { describe, expect, it } from 'vitest';
import { NotificationWidget } from '../../src/index.js';

describe('notification widget inheritance', () => {
  it('creates an instance with base and child state', () => {
    const widget = new NotificationWidget('n-1', 'Saved');

    expect(widget.snapshot()).toEqual({
      id: 'n-1',
      isMounted: false,
      message: 'Saved',
      isRead: false,
    });
  });

  it('keeps base behavior and child behavior together', () => {
    const widget = new NotificationWidget('n-2', 'Updated');
    widget.mount();
    widget.markAsRead();

    expect(widget.snapshot()).toEqual({
      id: 'n-2',
      isMounted: true,
      message: 'Updated',
      isRead: true,
    });
  });

  it('reuses the same snapshot shape before and after reading', () => {
    const widget = new NotificationWidget('n-3', 'Reviewed');
    const before = widget.snapshot();
    widget.markAsRead();
    const after = widget.snapshot();

    expect(Object.keys(before)).toEqual(['id', 'isMounted', 'message', 'isRead']);
    expect(Object.keys(after)).toEqual(['id', 'isMounted', 'message', 'isRead']);
  });
});
