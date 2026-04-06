'use strict';

export function normalizeName(rawName) {
  if (rawName === null || rawName === '') {
    return 'Guest';
  }

  return rawName;
}

export function parseAge(rawAge) {
  if (rawAge === null || rawAge === '') {
    return null;
  }

  const age = Number(rawAge);

  if (Number.isNaN(age) || age < 0) {
    return null;
  }

  return age;
}

export function buildSurveyState(rawName, rawAge, confirmedRules) {
  const name = normalizeName(rawName);
  const age = parseAge(rawAge);

  return {
    name,
    age,
    confirmedRules,
    canStart: age !== null && confirmedRules === true,
    greeting: `Hello, ${name}!`,
  };
}
