# Topic 4.2 - Split a Long Script into Small Functions

## Goal

This exercise introduces the main job of a function:
move one small piece of logic into a named block that we can call again later.

Instead of one long script that does everything at once,
we split the work into small understandable steps.

## What you are training

- create a function with parameters
- return a result from a function
- move one responsibility into one function
- compose a final state object from smaller helper functions

## Task

Finish `src/index.js`.

1. `buildStudentFullName` should join first and last name.
2. `calculateProgressPercent` should return a rounded percentage.
3. If `totalLessons` is `0`, return `0` instead of dividing by zero.
4. `buildStudentCardState` should reuse both helper functions.

## Expected runtime result

- `buildStudentFullName('Anna', 'Petrova')` should return `'Anna Petrova'`
- `calculateProgressPercent(3, 4)` should return `75`
- `buildStudentCardState('Max', 'Lee', 6, 10)` should return:

```js
{
  fullName: 'Max Lee',
  completedLessons: 6,
  totalLessons: 10,
  progressPercent: 60,
  hasStarted: true,
  statusLine: 'Max Lee: 60% completed',
}
```

## Why this matters

A good first function is not "smart".
It is just responsible for one clear task.

When every small step has a name,
reading the code becomes much easier.

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
