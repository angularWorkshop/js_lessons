import { describe, expect, it } from 'vitest';
import { applyRealtimeMessage, createNotificationState } from '../../src/index.js';

describe('realtime notifications state', () => {
  it('creates the default notification state', () => {
    expect(createNotificationState()).toEqual({
      items: [],
      unreadCount: 0,
      lastHeartbeat: null,
    });
  });

  it('adds a notification to the front of the list and increments unreadCount', () => {
    const state = {
      items: [{ id: 'old', title: 'Old' }],
      unreadCount: 1,
      lastHeartbeat: null,
    };

    expect(
      applyRealtimeMessage(state, {
        type: 'notification',
        payload: { id: 'new', title: 'New' },
      }),
    ).toEqual({
      items: [
        { id: 'new', title: 'New' },
        { id: 'old', title: 'Old' },
      ],
      unreadCount: 2,
      lastHeartbeat: null,
    });
  });

  it('updates heartbeat separately and ignores unsupported events', () => {
    const state = {
      items: [{ id: 'n-1', title: 'Saved' }],
      unreadCount: 1,
      lastHeartbeat: null,
    };

    expect(
      applyRealtimeMessage(state, {
        type: 'heartbeat',
        payload: '2026-04-06T15:00:00.000Z',
      }),
    ).toEqual({
      items: [{ id: 'n-1', title: 'Saved' }],
      unreadCount: 1,
      lastHeartbeat: '2026-04-06T15:00:00.000Z',
    });

    expect(
      applyRealtimeMessage(state, {
        type: 'typing',
        payload: { userId: 'u-1' },
      }),
    ).toEqual(state);
  });
});
