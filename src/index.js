'use strict';

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function applyIncomingComment(state, event, allowedOrigin) {
  const payload = event?.data?.payload;

  if (event.origin !== allowedOrigin || event?.data?.type !== 'comment:new') {
    return {
      ...state,
      rejectedCount: state.rejectedCount + 1,
    };
  }

  if (!payload || typeof payload.id !== 'string' || typeof payload.author !== 'string' || typeof payload.text !== 'string') {
    return {
      ...state,
      rejectedCount: state.rejectedCount + 1,
    };
  }

  const safeComment = {
    id: payload.id,
    authorHtml: escapeHtml(payload.author),
    textHtml: escapeHtml(payload.text),
  };

  return {
    ...state,
    items: [...state.items, safeComment],
  };
}
