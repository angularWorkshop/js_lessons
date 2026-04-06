# Topic 1.1 - First JavaScript Script: From "Hello, world!" to Predictable State

## Why this exercise exists

At the start of JavaScript, we need a stable base:

- enable strict mode
- declare variables clearly
- normalize raw user input
- convert string values to numbers explicitly
- return a predictable object from a function

This is the exact foundation we will use later for conditions, loops, and functions.

## Starter scenario

You are building a small "welcome flow":

1. take a raw name from input
2. take a raw age from input
3. check user confirmation
4. produce one deterministic state object

Starter code already contains three functions and tests.

## What you need to implement

1. `sanitizeUserName(rawName)`
- trim surrounding spaces
- return `"Guest"` if the value is empty after `trim()`

2. `parseAge(rawAge)`
- return `null` for empty or invalid values
- return a number for valid numeric input

3. `buildWelcomeState(rawName, rawAge, isConfirmed)`
- reuse both helper functions
- compute `canStart` as `Boolean(isConfirmed) && age !== null`
- return the final state object with the expected shape

## Constraints

- keep exported function names unchanged
- keep returned object keys unchanged
- keep `'use strict';` in the source file
- keep the implementation explicit and beginner-friendly

## Definition of done

- all tests pass with `npm run test`
- no TODO remains unresolved
- behavior is deterministic for edge cases (empty input, invalid age)

## Run locally

```bash
npm install
npm run test
```
