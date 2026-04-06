'use strict';

export function collectRegistrationValues(form) {
  return {
    name: form.querySelector('[data-role="name"]').value.trim(),
    email: form.querySelector('[data-role="email"]').value.trim(),
    password: form.querySelector('[data-role="password"]').value,
  };
}

export function validateRegistration(values) {
  const errors = {
    name: values.name ? '' : 'Enter your name',
    email: values.email.includes('@') ? '' : 'Enter a valid email',
    password:
      values.password.length >= 8 ? '' : 'Password must be at least 8 characters',
  };

  return {
    errors,
    isValid: Object.values(errors).every(message => message === ''),
  };
}

export function syncRegistrationUI(form, validation) {
  form.querySelector('[data-role="error-name"]').textContent = validation.errors.name;
  form.querySelector('[data-role="error-email"]').textContent = validation.errors.email;
  form.querySelector('[data-role="error-password"]').textContent = validation.errors.password;
  form.querySelector('[data-role="submit"]').disabled = !validation.isValid;
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
