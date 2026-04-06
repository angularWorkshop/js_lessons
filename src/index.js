'use strict';

export function toNumber(rawValue) {
  if (rawValue === null || rawValue === '') {
    return null;
  }

  const numberValue = Number(rawValue);

  if (Number.isNaN(numberValue)) {
    return null;
  }

  return numberValue;
}

export function sumPromptValues(firstRawValue, secondRawValue) {
  const firstNumber = toNumber(firstRawValue);
  const secondNumber = toNumber(secondRawValue);

  if (firstNumber === null || secondNumber === null) {
    return null;
  }

  return firstNumber + secondNumber;
}

export function buildCalculatorState(firstRawValue, secondRawValue) {
  const result = sumPromptValues(firstRawValue, secondRawValue);

  return {
    firstRawValue,
    secondRawValue,
    result,
    message: result === null ? 'Enter two numbers.' : `Result: ${result}`,
  };
}
