'use strict';

export function createNotificationState() {
  return {
    items: [],
    unreadCount: 0,
    lastHeartbeat: null,
  };
}

export function applyRealtimeMessage(state, message) {
  if (message.type === 'notification') {
    return {
      ...state,
      items: [message.payload, ...state.items],
      unreadCount: state.unreadCount + 1,
    };
  }

  if (message.type === 'heartbeat') {
    return {
      ...state,
      lastHeartbeat: message.payload,
    };
  }

  return state;
}
