'use strict';

export function toNumber(rawValue) {
  // TODO: convert the prompt value to a number.
  // Return null for null, empty string, or invalid text.
  return rawValue;
}

export function sumPromptValues(firstRawValue, secondRawValue) {
  const firstNumber = toNumber(firstRawValue);
  const secondNumber = toNumber(secondRawValue);

  return firstNumber + secondNumber;
}

export function buildCalculatorState(firstRawValue, secondRawValue) {
  const result = sumPromptValues(firstRawValue, secondRawValue);

  return {
    firstRawValue,
    secondRawValue,
    result,
    message: `Result: ${result}`,
  };
}
