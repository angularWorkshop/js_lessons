# Topic 2.2 - Fix a Calculator That Receives Strings

## Goal

This exercise shows one of the most famous beginner mistakes in JavaScript:

```js
'2' + '3' // '23'
```

When numbers come from `prompt(...)`, they usually arrive as strings. If we do not convert them first, the calculator starts joining text instead of adding numbers.

## Task

Finish `src/index.js`.

1. In `toNumber`, convert the raw prompt value to a number.
2. Return `null` for `null`, an empty string, or text that cannot become a number.
3. In `sumPromptValues`, add numbers only after conversion.
4. In `buildCalculatorState`, return a predictable object with the final `result` and `message`.

## Expected runtime result

- `toNumber('2')` returns `2`
- `toNumber('abc')` returns `null`
- `sumPromptValues('2', '3')` returns `5`
- invalid input should produce `result: null`
- invalid input should show the message `Enter two numbers.`

## Why this matters

- prompt input is text by default
- a calculator must work with numbers, not with number-looking strings
- explicit conversion removes hidden surprises from the code

## StackBlitz auto-check mode

- StackBlitz starts with `npm run start:dev`
- tests run on startup and after each save
- terminal shows `ASSIGNMENT STATUS: COMPLETED` or `ASSIGNMENT STATUS: NOT COMPLETED`

## Run locally

```bash
npm install
npm run test
```
