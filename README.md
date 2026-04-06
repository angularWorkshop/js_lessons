# Topic 2.1 - Fix Type Confusion

## Goal

This starter branch shows a common beginner trap: a file can look valid and still behave incorrectly because values use the wrong types.
Your task is to replace the confusing values with the correct JavaScript types so the behavior becomes honest again.

## Task

Finish `src/index.js`.

1. Keep `articleTitle` as a string.
2. Change `likesCount` to a number.
3. Change `isPublished` to a boolean.
4. Change `editorNote` to `null`.
5. Change `scheduledAt` to `undefined`.
6. Keep `articlePreviewState()` aligned with the corrected values.

## Expected runtime result

- `likesCount` should be `5`
- `isPublished` should be `false`
- `paymentStatus` equivalent here should become `Draft`
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