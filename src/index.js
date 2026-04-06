'use strict';

export function normalizeName(rawName) {
  // TODO: return 'Guest' when prompt returned null or an empty string.
  return rawName;
}

export function parseAge(rawAge) {
  // TODO: convert the prompt result to a number.
  // Return null for null, empty string, text, or a negative age.
  return rawAge;
}

export function buildSurveyState(rawName, rawAge, confirmedRules) {
  const name = normalizeName(rawName);
  const age = parseAge(rawAge);

  return {
    name,
    age,
    confirmedRules,
    canStart: false,
    greeting: `Hello, ${name}!`,
  };
}
