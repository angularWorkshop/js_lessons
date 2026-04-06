'use strict';

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function renderCommentCard(author, comment) {
  const safeComment = escapeHtml(comment);
  return '<article><strong>' + author + '</strong><p>' + safeComment + '</p></article>';
}
