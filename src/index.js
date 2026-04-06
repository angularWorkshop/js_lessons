'use strict';

export function collectRegistrationValues(form) {
  // TODO: read and normalize current form values
  return {
    name: '',
    email: '',
    password: '',
  };
}

export function validateRegistration(values) {
  // TODO: validate each field and return one predictable object
  return {
    errors: {
      name: '',
      email: '',
      password: '',
    },
    isValid: false,
  };
}

export function syncRegistrationUI(form, validation) {
  const nameError = form.querySelector('[data-role="error-name"]');
  const emailError = form.querySelector('[data-role="error-email"]');
  const passwordError = form.querySelector('[data-role="error-password"]');
  const submitButton = form.querySelector('[data-role="submit"]');

  // TODO: reflect validation result in the UI
  void nameError;
  void emailError;
  void passwordError;
  void submitButton;
}

export function buildRegistrationState(form) {
  const values = collectRegistrationValues(form);
  const validation = validateRegistration(values);
  syncRegistrationUI(form, validation);

  return {
    values,
    ...validation,
  };
}
