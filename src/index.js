'use strict';

export function normalizeDisplayName(rawName) {
  // TODO: trim the string and return 'Guest' if it becomes empty
  return rawName;
}

export function buildDisplayNameState(rawName) {
  const normalizedName = normalizeDisplayName(rawName);

  return {
    rawName,
    normalizedName,
    greeting: '', // TODO: `Hello, ${normalizedName}!`
    nameLength: 0, // TODO: length of normalizedName
  };
}
