# Topic 3.2 - Workshop Access Rules

## Goal

This exercise trains normal conditional logic with more than one rule.
We are building a tiny access decision for a workshop, and each condition changes the final answer.

## Task

Finish `src/index.js`.

1. Adults aged 18 or older can start when they accepted the rules.
2. Teenagers from 14 to 17 can start only when they accepted the rules and have parent consent.
3. Users younger than 14 cannot start.
4. Build the final state object with the correct `canStart` and `message`.

## Expected runtime result

- `buildWorkshopAccessState(20, true, false)` grants access
- `buildWorkshopAccessState(16, true, true)` grants access
- `buildWorkshopAccessState(16, true, false)` denies access
- `buildWorkshopAccessState(12, true, true)` denies access

## Why this matters

- real conditions almost never depend on only one value
- grouping rules clearly is more important than writing a short expression
- the result should read like a business rule, not like a puzzle

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
