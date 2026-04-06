# Topic 7.1 - Fix Scope Visibility

## Goal

This exercise shows a very common scope mistake:
a variable is declared inside a block and then used outside of it.

## What you are training

- understand where a variable is visible
- fix block scope issues without using `var`
- see how local and outer values can work together

## Task

Finish `src/index.js`.

1. In `buildPriceLabel`, make `discountLabel` visible where the final string is created.
2. Do not use `var`.
3. In `buildScopeSnapshot`, return the expected values after the scope bug is fixed.

## Run locally

```bash
npm install
npm run test
```
