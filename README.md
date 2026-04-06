# Topic 4.1 - Sum a Range with a `for` Loop

## Goal

This exercise is the first calm introduction to loops.
We do not start with something abstract. We take one simple task:
add all numbers from `start` to `end`, one by one.

## What you are training

- read a `for` loop as a sequence of repeated steps
- use an accumulator variable that stores the running result
- return a final value after the loop finishes
- build a predictable state object from the computed result

## Task

Finish `src/index.js`.

1. In `sumInclusiveRange`, create a `for` loop from `start` to `end`.
2. Add each current number to `total`.
3. In `buildRangeSumState`, calculate `numbersCount`.
4. Keep the returned object aligned with the final sum.

## Expected runtime result

- `sumInclusiveRange(1, 4)` should return `10`
- `sumInclusiveRange(3, 3)` should return `3`
- `buildRangeSumState(2, 5)` should return:

```js
{
  start: 2,
  end: 5,
  total: 14,
  numbersCount: 4,
  label: 'Sum from 2 to 5 is 14',
}
```

## Why this matters

A loop is useful when the same action must happen many times.
Here the repeated action is simple:
"take the next number and add it to the current total".

That same pattern appears later in arrays, DOM processing, and data transformation.

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
