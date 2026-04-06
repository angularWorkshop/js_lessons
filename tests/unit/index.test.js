import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  buildRegistrationState,
  collectRegistrationValues,
  validateRegistration,
} from '../../src/index.js';

function createRegistrationForm(values = {}) {
  const documentRef = createFakeDocument();
  const form = createElement(documentRef, 'form');

  form.append(
    createElement(documentRef, 'input', {
      attrs: { 'data-role': 'name' },
      props: { value: values.name ?? '  Anna  ' },
    }),
    createElement(documentRef, 'p', { dataset: { role: 'error-name' } }),
    createElement(documentRef, 'input', {
      attrs: { 'data-role': 'email' },
      props: { value: values.email ?? 'anna@example.com' },
    }),
    createElement(documentRef, 'p', { dataset: { role: 'error-email' } }),
    createElement(documentRef, 'input', {
      attrs: { 'data-role': 'password' },
      props: { value: values.password ?? 'superpass' },
    }),
    createElement(documentRef, 'p', { dataset: { role: 'error-password' } }),
    createElement(documentRef, 'button', {
      text: 'Register',
      dataset: { role: 'submit' },
    }),
  );

  documentRef.body.append(form);
  return form;
}

describe('registration form validation', () => {
  it('collects normalized values from the form', () => {
    const form = createRegistrationForm();

    expect(collectRegistrationValues(form)).toEqual({
      name: 'Anna',
      email: 'anna@example.com',
      password: 'superpass',
    });
  });

  it('returns field errors and final validity', () => {
    expect(
      validateRegistration({
        name: '',
        email: 'invalid-email',
        password: '123',
      }),
    ).toEqual({
      errors: {
        name: 'Enter your name',
        email: 'Enter a valid email',
        password: 'Password must be at least 8 characters',
      },
      isValid: false,
    });
  });

  it('builds the final form state and reflects it in the UI', () => {
    const form = createRegistrationForm({
      name: ' ',
      email: 'anna',
      password: 'short',
    });

    const state = buildRegistrationState(form);

    expect(state.isValid).toBe(false);
    expect(form.querySelector('[data-role="error-name"]').textContent).toBe('Enter your name');
    expect(form.querySelector('[data-role="error-email"]').textContent).toBe('Enter a valid email');
    expect(form.querySelector('[data-role="error-password"]').textContent).toBe(
      'Password must be at least 8 characters',
    );
    expect(form.querySelector('[data-role="submit"]').disabled).toBe(true);
  });
});
