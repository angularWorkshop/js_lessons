# Topic 10.1 - Progress Interval

## Goal

This exercise treats an interval as a repeating process with a clear ending.
You will start progress updates, stop them at the maximum, and keep state predictable.

## What you are training

- repeat work with `setInterval`
- stop repeated work with `clearInterval`
- model progress as a lifecycle, not just a changing number

## Task

Finish `src/index.js`.

1. In `startProgress`, create an interval, move state to `running`, and store `intervalId`.
2. On each tick, increase `state.value` without crossing `state.max`.
3. When progress reaches `max`, clear the interval and move state to `done`.

## Run locally

```bash
npm install
npm run test
```
