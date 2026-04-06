# Topic 5.1 - Calculate and Format an Average

## Goal

This exercise shows that one numeric scenario often contains two steps:
calculate the value for logic, then prepare a clean string for the UI.

## What you are training

- calculate an average numeric value
- guard against division by zero
- format a number with `toFixed(1)`
- build a final state object from both raw and formatted values

## Task

Finish `src/index.js`.

1. In `calculateAverageLessonMinutes`, return the average number.
2. If `lessonsCount` is `0`, return `0`.
3. In `formatAverageMinutes`, return a string like `'18.3 min'`.
4. Keep `buildAverageDurationState` aligned with the final values.

## Expected runtime result

- `calculateAverageLessonMinutes(55, 3)` -> `18.333333333333332`
- `formatAverageMinutes(18.333333333333332)` -> `'18.3 min'`
- `buildAverageDurationState(55, 3)` should return a predictable object

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`
