# Topic 5.1 - Clean Up a Display Name

## Goal

This exercise is the first practical use of string methods in the course.
We take a raw user name and turn it into a value that looks clean in the interface.

## What you are training

- remove extra spaces from a raw string
- normalize letter case
- return a fallback when the cleaned value is empty
- build a predictable state object from the final string

## Task

Finish `src/index.js`.

1. In `normalizeDisplayName`, call `trim()`.
2. If the cleaned string is empty, return `'Guest'`.
3. Capitalize the first letter and lowercase the rest.
4. Keep `buildDisplayNameState` aligned with the normalized value.

## Expected runtime result

- `normalizeDisplayName('  anNa  ')` -> `'Anna'`
- `normalizeDisplayName('   ')` -> `'Guest'`
- `buildDisplayNameState('  maX  ')` should return a predictable object

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
