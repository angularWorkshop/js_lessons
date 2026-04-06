'use strict';

export function normalizeDisplayName(rawName) {
  const trimmedName = rawName.trim();

  if (trimmedName === '') {
    return 'Guest';
  }

  const firstLetter = trimmedName[0].toUpperCase();
  const restLetters = trimmedName.slice(1).toLowerCase();

  return `${firstLetter}${restLetters}`;
}

export function buildDisplayNameState(rawName) {
  const normalizedName = normalizeDisplayName(rawName);

  return {
    rawName,
    normalizedName,
    greeting: `Hello, ${normalizedName}!`,
    nameLength: normalizedName.length,
  };
}
