# Topic 1.2 - User Card Variables

## Goal

This starter branch is the first calm practice for variable declarations.
We are not solving scope puzzles yet. The job is simpler: understand which values stay stable, which value changes once, and declare them with the right keyword.

## Task

Finish `src/index.js`.

1. Declare the stable values for the user card.
2. Declare `completedSteps` with the keyword that allows reassignment.
3. Increase `completedSteps` by one.
4. Build `profileLine` and the final `userCardState` object.

## Requirements

- `studentName` should be `Mila`
- `studentCity` should be `Kazan`
- `learningTrack` should be `JavaScript Basics`
- `completedSteps` should become `1`
- `profileLine` should be `Mila studies JavaScript Basics.`
- use `const` for stable values
- use `let` for the value that changes
- do not use `var`

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```