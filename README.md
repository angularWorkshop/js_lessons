# Topic 4.1 - Build a Sequence with a `while` Loop

## Goal

This exercise shows another loop style.
With `for`, the counter is written in one compact line.
With `while`, we manage the counter step by step ourselves.

## What you are training

- start from the first value in the sequence
- repeat work while the condition is true
- update the counter inside the loop
- build an array without gaps and without duplicate numbers

## Task

Finish `src/index.js`.

1. In `buildLessonNumbers`, create an empty array.
2. Start `current` from `firstLesson`.
3. Use `while (current <= lastLesson)`.
4. Push each lesson number into the array and increase `current`.
5. In `buildLessonPlanState`, calculate `count` from the final array.

## Expected runtime result

- `buildLessonNumbers(2, 5)` should return `[2, 3, 4, 5]`
- `buildLessonNumbers(7, 7)` should return `[7]`
- `buildLessonPlanState(3, 6)` should return:

```js
{
  firstLesson: 3,
  lastLesson: 6,
  lessonNumbers: [3, 4, 5, 6],
  count: 4,
  label: 'Lessons 3-6: 3, 4, 5, 6',
}
```

## Why this matters

A `while` loop is useful when you want to see each step clearly:
check the condition, do the work, move to the next step.

This also teaches an important habit:
if the counter is never updated, the loop never finishes.

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
