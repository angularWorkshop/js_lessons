'use strict';

export function formatDisplayName(name) {
  const trimmed = name.trim();
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}
