# Topic 3.2 - Status Label with switch and Fallback

## Goal

This exercise trains one more common branching pattern:
we map a known code to a readable label, and if the code is unknown, we use a fallback value.

## Task

Finish `src/index.js`.

1. Use `switch` in `getStatusLabel`.
2. Return the correct label for known status codes.
3. For an unknown code, return `customLabel ?? 'Unknown status'`.
4. Keep `buildStatusState` aligned with the final label.

## Expected runtime result

- `'draft'` becomes `'Draft'`
- `'review'` becomes `'In review'`
- an unknown code uses `customLabel` when it exists
- an unknown code without a custom label uses `'Unknown status'`

## Why this matters

- `switch` is useful when one value can lead to several named outcomes
- fallback logic should be explicit, not hidden
- `??` is different from `||`: an empty string should not be replaced automatically

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
