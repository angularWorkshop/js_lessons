# Topic 9.2 - Registration Form Validation

## Goal

This exercise treats form validation as a clear sequence of checks.
You will collect values, validate each field, and reflect the result in the interface.

## What you are training

- read values from form fields
- build a predictable validation result object
- connect validation output to error texts and submit availability

## Task

Finish `src/index.js`.

1. In `collectRegistrationValues`, read the current field values from the form.
2. In `validateRegistration`, return field errors and the final `isValid` flag.
3. In `syncRegistrationUI`, write error messages into the DOM and disable the submit button when the form is invalid.

## Run locally

```bash
npm install
npm run test
```
