# Topic 12.2 - Lesson Progress Class

## Goal

This exercise treats a class as a compact way to describe instance state and behavior.
You will build a lesson progress entity with bounded updates and a stable snapshot.

## What you are training

- use a constructor to initialize instance state
- update state through small focused methods
- return a stable snapshot for UI or tests

## Task

Finish `src/index.js`.

1. Implement the methods that set total steps and complete the next step.
2. Prevent `completedSteps` from going beyond `totalSteps`.
3. Return a stable snapshot through `getSnapshot`.

## Run locally

```bash
npm install
npm run test
```
