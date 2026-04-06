# Topic 1.2 - Fix var, let, and const

## Goal

This starter branch teaches the practical beginner rule for declarations by repair.
The file already runs, but the declarations are chosen poorly. Your task is to replace them with better ones so the final code reads like modern JavaScript.

## Task

Finish `src/index.js`.

1. Replace `var` with `const` for values that should stay stable.
2. Replace `var` with `let` for values that change.
3. Keep the runtime result the same.
4. Update `usesVar` in the final report.

## Requirements

- the file must not contain `var`
- `courseName` should use `const`
- `mentorName` should use `const`
- `completedTasks` should use `let`
- `screenStatus` should use `let`
- `declarationsReport.usesVar` should be `false`

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```