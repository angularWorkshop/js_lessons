# JavaScript Exercise Standard

## Branch naming

For every exercise create 2 branches from `main`:

- `lesson-topic-XX-exercise-YY-slug`
- `answer-topic-XX-exercise-YY-slug`

Do not use `/` in branch names.

## What belongs in `lesson` branch

- working project setup
- clear task description in `README.md`
- starter implementation with `TODO` markers
- tests already written
- part of the tests failing

## What belongs in `answer` branch

- all `TODO`s resolved
- all tests green
- final implementation remains focused on one learning goal

## Required quality bar

- avoid `var` unless the exercise explicitly teaches it
- keep runtime behavior deterministic
- all tests pass in the answer branch

## Standard structure

```text
README.md
src/
  index.js
tests/
  unit/
    index.test.js
```
