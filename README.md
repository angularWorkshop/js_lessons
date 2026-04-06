# Topic 9.1 - Counter Click Handlers

## Goal

This exercise is the first practical step into browser events.
You will connect click handlers to buttons and keep one small interface state consistent.

## What you are training

- attach click handlers to DOM elements
- update state after user actions
- keep number, status, and button availability in sync

## Task

Finish `src/index.js`.

1. In `syncCounterUI`, update the number, the status text, and the disabled state of the decrease button.
2. In `attachCounterHandlers`, connect click listeners to both buttons and update `state.count`.
3. In `buildCounterSnapshot`, replay a sequence of clicks and return the final UI snapshot.

## Run locally

```bash
npm install
npm run test
```
