# Topic 4.2 - Reuse One Helper Function in Several Checks

## Goal

This exercise teaches an important idea:
if the same rule is repeated in several places,
it is usually better to move that rule into one helper function.

## What you are training

- write one small helper function for one clear rule
- call the same helper function several times
- combine small boolean results into a bigger final rule
- keep the final state object readable

## Task

Finish `src/index.js`.

1. `isPassingScore` should return `true` when score is `70` or higher.
2. `canOpenCertificate` should reuse `isPassingScore` for both scores.
3. `buildCheckpointState` should keep separate flags for theory and practice.
4. The final label should describe whether the certificate is unlocked.

## Expected runtime result

- `isPassingScore(70)` should return `true`
- `isPassingScore(69)` should return `false`
- `canOpenCertificate(80, 72)` should return `true`
- `canOpenCertificate(80, 60)` should return `false`

## Why this matters

When one rule changes later,
it is much safer to update it in one place than in three different places.

This is one of the first real wins of functions in everyday code.

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
