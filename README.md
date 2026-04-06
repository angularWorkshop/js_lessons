# Topic 12.1 - Bound Notifier Callback

## Goal

This exercise teaches you to use `bind` when a method will be called later as a callback.
You will return a safe formatter that keeps access to the notifier prefix.

## What you are training

- understand why callbacks often lose object context
- use `bind` to prepare a stable function for future execution
- return reusable functions instead of executing too early

## Task

Finish `src/index.js`.

1. In `createSavedFormatter`, return a new function without calling it immediately.
2. Make sure the returned function keeps the original notifier as its context.
3. The returned callback must format later messages correctly through the external runner.

## Run locally

```bash
npm install
npm run test
```
