# Capstone 3.2 - Dashboard Widget Lifecycle

## Goal

This capstone treats timers and listeners as owned resources.
You will mount a widget, destroy it safely, and report whether the module is ready for release.

## What you are training

- register widget resources explicitly on mount
- clean them up symmetrically and idempotently on destroy
- derive release readiness from quality checks and remaining active resources

## Task

Finish `src/index.js`.

1. Implement mount and destroy.
2. Keep destroy idempotent.
3. Implement the final release snapshot.

## Run locally

```bash
npm install
npm run test
```
