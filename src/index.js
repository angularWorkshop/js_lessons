'use strict';

export function sumInclusiveRange(start, end) {
  let total = 0;

  // TODO: use a for loop and add every number from start to end to total

  return total;
}

export function buildRangeSumState(start, end) {
  const total = sumInclusiveRange(start, end);

  return {
    start,
    end,
    total,
    numbersCount: 0, // TODO: calculate how many numbers are in the inclusive range
    label: `Sum from ${start} to ${end} is ${total}`,
  };
}
