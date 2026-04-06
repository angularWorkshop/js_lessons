# Topic 13.2 - Lazy Range

## Goal

This exercise teaches you to use a generator for a lazy number range.
You will support both forward and backward movement and reject a zero step.

## What you are training

- generate range values on demand
- stop correctly for ascending and descending sequences
- guard invalid parameters explicitly

## Task

Finish `src/index.js`.

1. Throw an error when step is zero.
2. Yield values from `from` to `to` inclusively for ascending ranges.
3. Yield values downward for descending ranges.

## Run locally

```bash
npm install
npm run test
```
