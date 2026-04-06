# Topic 2.1 - Fix Type Confusion

## Goal

This exercise trains a very important beginner skill: looking at a value and asking not only "what is written here?" but also "what type is this value?"
In JavaScript, `'5'` and `5` are different values. `'false'` and `false` are different values too.

The file already runs, but some values lie about what they really are. Your task is to fix them so the program state becomes honest and predictable.

## Task

Finish `src/index.js`.

1. Keep `articleTitle` as a string.
2. Change `likesCount` from a string to a number.
3. Change `isPublished` from a string to a boolean.
4. Change `editorNote` from a string to `null`.
5. Change `scheduledAt` from a string to `undefined`.
6. Make sure `articlePreviewState()` returns the corrected values and behavior.

## Why this matters

- a value can look correct to a human and still break the program
- strings that only "look like" booleans or numbers are a common beginner bug
- when the base values are correct, the derived result becomes correct too

## Expected runtime result

- `likesCount` should be `5`
- `isPublished` should be `false`
- `editorNote` should be `null`
- `scheduledAt` should be `undefined`
- `statusLabel` should become `Draft`
- `needsEditorBanner` should become `false`

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
