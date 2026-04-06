# Topic 13.2 - ID Generator

## Goal

This exercise teaches you to treat a generator as a lazy source of values.
You will return one new identifier each time the consumer asks for it.

## What you are training

- use `function*` and `yield`
- preserve internal state across `next()` calls
- build values lazily instead of creating an array up front

## Task

Finish `src/index.js`.

1. Create a generator function called `createIdGenerator`.
2. Start from the provided number and increment after every yielded value.
3. Yield IDs in the format `prefix-number`.

## Run locally

```bash
npm install
npm run test
```
