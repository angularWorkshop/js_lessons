'use strict';

export function sanitizeUserName(rawName) {
  const value = String(rawName ?? '').trim();

  // TODO: return 'Гость' when the input is empty after trim.
  return value;
}

export function parseAge(rawAge) {
  // TODO: convert input to a number and return null when value is invalid.
  return Number(rawAge);
}

export function buildWelcomeState(rawName, rawAge, isConfirmed) {
  const name = sanitizeUserName(rawName);
  const age = parseAge(rawAge);

  // TODO: allow start only when user confirmed and age is a valid number.
  const canStart = false;

  return {
    strictMode: true,
    name,
    age,
    canStart,
    message: `Привет, ${name}!`,
  };
}
