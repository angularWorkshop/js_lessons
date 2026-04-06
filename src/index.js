'use strict';

export function sanitizeUserName(rawName) {
  const value = String(rawName ?? '').trim();
  return value === '' ? 'Guest' : value;
}

export function parseAge(rawAge) {
  if (rawAge === '' || rawAge === null || rawAge === undefined) {
    return null;
  }

  const parsed = Number(rawAge);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return null;
  }

  return parsed;
}

export function buildWelcomeState(rawName, rawAge, isConfirmed) {
  const name = sanitizeUserName(rawName);
  const age = parseAge(rawAge);
  const canStart = Boolean(isConfirmed) && age !== null;

  return {
    strictMode: true,
    name,
    age,
    canStart,
    message: `Hello, ${name}!`,
  };
}
