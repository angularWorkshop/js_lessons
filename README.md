# Topic 7.1 - Counter with Private State

## Goal

This exercise is the first practical look at closure.
You will build a function that remembers a value even after the outer function has already finished.

## What you are training

- store private state inside a function
- return methods that still can read and change that state
- prove that two counters do not share the same value

## Task

Finish `src/index.js`.

1. In `increment`, increase the private value by `1`.
2. In `getValue`, return the current private value.
3. In `buildCounterState`, use two counters and return their values after several operations.

## Run locally

```bash
npm install
npm run test
```
