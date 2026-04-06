# Topic 12.1 - Fix Lost this in Cart

## Goal

This exercise teaches you to see this as a call-site rule, not as function magic.
You will restore the correct context for an extracted cart method.

## What you are training

- understand how method extraction loses object context
- use `call` or `apply` to invoke a function with an explicit this
- keep the result shape stable while fixing the context bug

## Task

Finish `src/index.js`.

1. Do not change the cart object or the implementation of `getTotal`.
2. In `getCheckoutSummary`, invoke the extracted method with the original cart as context.
3. Return the discounted total together with the cart currency.

## Run locally

```bash
npm install
npm run test
```
