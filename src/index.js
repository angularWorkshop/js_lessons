'use strict';

export function getFirstItem(items) {
  // TODO: return the first item or null for an empty array
  return null;
}

export function getLastItem(items) {
  // TODO: return the last item or null for an empty array
  return null;
}

export function buildArrayEdgesState(items) {
  return {
    count: items.length,
    firstItem: getFirstItem(items),
    lastItem: getLastItem(items),
    isEmpty: false, // TODO: items.length === 0
  };
}
