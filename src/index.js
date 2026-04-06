'use strict';

export function getStatusLabel(statusCode, customLabel) {
  switch (statusCode) {
    case 'draft':
      return 'Draft';
    case 'review':
      return 'In review';
    case 'published':
      return 'Published';
    case 'archived':
      return 'Archived';
    default:
      return customLabel ?? 'Unknown status';
  }
}

export function buildStatusState(statusCode, customLabel) {
  const label = getStatusLabel(statusCode, customLabel);

  return {
    statusCode,
    customLabel,
    label,
    displayLine: `Status: ${label}`,
  };
}
