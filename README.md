# Topic 14.2 - Widget Cleanup

## Goal

This exercise treats timers and listeners as resources that must be cleaned up explicitly.
You will implement mount and destroy so the widget does not leave ghost behavior behind.

## What you are training

- register resources during mount
- clear timers and remove listeners during destroy
- keep destroy idempotent and predictable

## Task

Finish `src/index.js`.

1. In `mountWidget`, create the interval and register the click listener.
2. In `destroyWidget`, clear the interval and remove the same listener.
3. Make repeated destroy calls safe.

## Run locally

```bash
npm install
npm run test
```
