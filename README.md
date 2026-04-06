# Topic 11.1 - Screen State Machine

## Goal

This exercise turns scattered UI signals into one final screen snapshot.
You will model loading, error, empty, and success as explicit states instead of mixing them accidentally.

## What you are training

- build one stable UI-state object from raw flags
- separate loading, error, empty, and success clearly
- keep screen shape predictable for the rendering layer

## Task

Finish `src/index.js`.

1. Return a loading state when `isLoading` is true.
2. Return an error state when `errorMessage` exists.
3. Return empty when there is no error and the list is empty, otherwise return success with copied items.

## Run locally

```bash
npm install
npm run test
```
