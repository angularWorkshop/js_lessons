# Topic 14.1 - Quality Gate Summary

## Goal

This exercise turns separate check results into one release decision.
You will build a stable summary object that shows passed checks, failed checks, and final readiness.

## What you are training

- aggregate quality signals into one object
- compute release readiness from failures
- keep summary shape stable for CI or UI

## Task

Finish `src/index.js`.

1. Collect passed and failed check names separately.
2. Compute `canRelease` from the failed checks.
3. Return one stable summary object.

## Run locally

```bash
npm install
npm run test
```
