'use strict';

export function sanitizeUserName(rawName) {
  const value = String(rawName ?? '').trim();

  // TODO: return "Guest" when value is empty after trim.
  return value;
}

export function parseAge(rawAge) {
  // TODO:
  // 1) return null for "", null, and undefined
  // 2) convert value with Number(...)
  // 3) return null for NaN, Infinity, and negative values
  return Number(rawAge);
}

export function buildWelcomeState(rawName, rawAge, isConfirmed) {
  const name = sanitizeUserName(rawName);
  const age = parseAge(rawAge);

  // TODO: canStart should be true only when confirmed and age is valid.
  const canStart = false;

  return {
    strictMode: true,
    name,
    age,
    canStart,
    message: `Hello, ${name}!`,
  };
}
