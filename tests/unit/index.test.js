import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  applyInterfaceState,
  buildInterfaceSnapshot,
  readInterfaceState,
} from '../../src/index.js';

function createInterfaceRoot() {
  const documentRef = createFakeDocument();
  const root = createElement(documentRef, 'section', {
    className: 'page',
    attrs: {
      'data-theme': 'light',
    },
  });

  const title = createElement(documentRef, 'h2', {
    text: 'Light theme enabled',
    dataset: { role: 'theme-title' },
  });
  const status = createElement(documentRef, 'p', {
    text: 'Needs review',
    dataset: { role: 'theme-status' },
    attrs: {
      'data-state': 'pending',
    },
  });
  const button = createElement(documentRef, 'button', {
    text: 'Switch to dark theme',
    dataset: { role: 'theme-button' },
  });
  button.disabled = true;

  root.append(title, status, button);
  documentRef.body.append(root);

  return root;
}

describe('apply interface theme state', () => {
  it('updates the root theme, texts, and button state for the dark ready mode', () => {
    const root = createInterfaceRoot();

    applyInterfaceState(root, 'dark', true);

    expect(root.getAttribute('data-theme')).toBe('dark');
    expect(root.classList.contains('page--dark')).toBe(true);
    expect(readInterfaceState(root)).toEqual({
      theme: 'dark',
      isDark: true,
      title: 'Dark theme enabled',
      buttonLabel: 'Switch to light theme',
      buttonDisabled: false,
      status: 'Ready to continue',
      statusState: 'ready',
    });
  });

  it('updates the interface for the light pending mode', () => {
    const root = createInterfaceRoot();

    applyInterfaceState(root, 'light', false);

    expect(readInterfaceState(root)).toEqual({
      theme: 'light',
      isDark: false,
      title: 'Light theme enabled',
      buttonLabel: 'Switch to dark theme',
      buttonDisabled: true,
      status: 'Needs review',
      statusState: 'pending',
    });
  });

  it('builds one predictable snapshot after applying the new state', () => {
    const root = createInterfaceRoot();

    expect(buildInterfaceSnapshot(root, 'dark', true)).toEqual({
      theme: 'dark',
      isDark: true,
      title: 'Dark theme enabled',
      buttonLabel: 'Switch to light theme',
      buttonDisabled: false,
      status: 'Ready to continue',
      statusState: 'ready',
    });
  });
});
