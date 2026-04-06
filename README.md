# Topic 10.1 - Reminder Timeout State

## Goal

This exercise treats a timeout as a small lifecycle with clear states.
You will schedule a reminder, cancel it when needed, and keep the final state predictable.

## What you are training

- schedule delayed work with `setTimeout`
- cancel scheduled work with `clearTimeout`
- model timer lifecycle with explicit state

## Task

Finish `src/index.js`.

1. In `startReminder`, cancel a previous timeout if it exists and schedule a new one.
2. In the timeout callback, move the reminder to `done`, save the delivered message, and clear `timerId`.
3. In `stopReminder`, cancel the timeout and move the reminder to `stopped`.

## Run locally

```bash
npm install
npm run test
```
