# Topic 2.2 - Safe Survey Input

## Goal

This exercise shows what usually comes back from browser dialogs:

- `prompt(...)` returns a string or `null`
- `confirm(...)` returns a boolean

That means a beginner must not guess. We need to look at the incoming value and convert it into a clean program state step by step.

## Task

Finish `src/index.js`.

1. In `normalizeName`, return `'Guest'` if the value from `prompt` is `null` or an empty string.
2. In `parseAge`, convert the prompt result to a number.
3. In `parseAge`, return `null` for `null`, an empty string, text like `'abc'`, or a negative age.
4. In `buildSurveyState`, return a predictable object with `name`, `age`, `confirmedRules`, `canStart`, and `greeting`.

## Expected runtime result

- `normalizeName('Mila')` returns `'Mila'`
- `normalizeName('')` returns `'Guest'`
- `parseAge('19')` returns `19`
- `parseAge('abc')` returns `null`
- `canStart` becomes `true` only when age is valid and rules are confirmed

## Why this matters

- browser input is not automatically ready for business logic
- a prompt can return `null`, not only text
- numbers from prompt usually arrive as strings
- converting raw input early makes the rest of the program easier to trust

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
