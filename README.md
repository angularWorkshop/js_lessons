# Topic 11.1 - Safe JSON Parser

## Goal

This exercise teaches you to treat external JSON as unreliable input.
You will parse a draft safely, validate its shape, and return a stable fallback when something is wrong.

## What you are training

- wrap risky parsing in `try/catch`
- validate object shape after successful parsing
- return one predictable fallback object instead of crashing

## Task

Finish `src/index.js`.

1. In `parseLessonDraft`, parse the JSON string inside `try/catch`.
2. If parsing fails or the object shape is invalid, return a fresh fallback draft.
3. If the parsed value is valid, return a normalized draft object.

## Run locally

```bash
npm install
npm run test
```
