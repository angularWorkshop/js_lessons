'use strict';

export function getFirstItem(items) {
  if (items.length === 0) {
    return null;
  }

  return items[0];
}

export function getLastItem(items) {
  if (items.length === 0) {
    return null;
  }

  return items[items.length - 1];
}

export function buildArrayEdgesState(items) {
  return {
    count: items.length,
    firstItem: getFirstItem(items),
    lastItem: getLastItem(items),
    isEmpty: items.length === 0,
  };
}
