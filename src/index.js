'use strict';

export function getStatusLabel(statusCode, customLabel) {
  // TODO: implement this function with switch and a nullish fallback.
  return '';
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
