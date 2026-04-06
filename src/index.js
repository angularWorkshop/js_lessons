'use strict';

export function sumInclusiveRange(start, end) {
  let total = 0;

  for (let current = start; current <= end; current += 1) {
    total += current;
  }

  return total;
}

export function buildRangeSumState(start, end) {
  const total = sumInclusiveRange(start, end);

  return {
    start,
    end,
    total,
    numbersCount: end - start + 1,
    label: `Sum from ${start} to ${end} is ${total}`,
  };
}
