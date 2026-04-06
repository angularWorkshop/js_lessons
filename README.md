# Topic 3.1 - Discount Calculator

## Goal

This exercise trains the first everyday use of arithmetic operators in JavaScript.
We are not doing abstract math. We are calculating a discount and the final price a user should see.

## Task

Finish `src/index.js`.

1. In `calculateDiscountAmount`, calculate how much money is subtracted from the base price.
2. In `calculateFinalPrice`, subtract the discount from the base price.
3. In `buildPriceState`, keep the final object aligned with the calculated values.

## Expected runtime result

- `calculateDiscountAmount(200, 15)` returns `30`
- `calculateFinalPrice(200, 15)` returns `170`
- `buildPriceState(200, 15)` returns the correct final object

## Why this matters

- arithmetic operators are useful only when they describe a real scenario
- a percentage is one of the first places where order of operations matters
- it is easier to trust calculations when each step has its own small function

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
