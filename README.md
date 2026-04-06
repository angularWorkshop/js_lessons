# Topic 3.1 - Fix Access Comparisons

## Goal

This starter file already has access logic, but the comparisons inside it are wrong.
Your job is to fix the comparison expressions so the program stops making the wrong access decision.

## Task

Finish `src/index.js`.

1. Fix the age comparison so a user who is exactly 18 is treated correctly.
2. Fix the payment check so it works with a real boolean value.
3. Fix the intro check so it also works with a real boolean value.
4. Make sure `canOpenWorkshop` and the final message become correct.

## Expected runtime result

- `getAccessState(18, true, true)` should grant access
- `getAccessState(17, true, true)` should deny access
- `getAccessState(19, false, true)` should deny access

## Why this matters

- one wrong comparison can quietly break the whole rule
- `18` and `> 18` are not the same business decision
- comparing booleans to strings is a very common beginner bug

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
