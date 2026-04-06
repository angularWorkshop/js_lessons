# Topic 10.3 - Fetch Fallback States

## Goal

This exercise separates success, empty, and error states in one loading flow.
You will make the final result stable even when the request fails or returns no items.

## What you are training

- distinguish success, empty, and error states
- return stable objects from async flows
- design fallbacks as part of the state model

## Task

Finish `src/index.js`.

1. Return `success` when lessons are loaded and not empty.
2. Return `empty` when the response is ok but the items array is empty.
3. Return `error` with a fallback message when the request fails.

## Run locally

```bash
npm install
npm run test
```
