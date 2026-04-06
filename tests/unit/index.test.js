import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  attachCounterHandlers,
  buildCounterSnapshot,
  syncCounterUI,
} from '../../src/index.js';

function createCounterRoot() {
  const documentRef = createFakeDocument();
  const root = createElement(documentRef, 'section');

  const countNode = createElement(documentRef, 'strong', {
    text: '0',
    dataset: { role: 'count' },
  });
  const statusNode = createElement(documentRef, 'p', {
    text: 'Zero',
    dataset: { role: 'status' },
  });
  const decreaseButton = createElement(documentRef, 'button', {
    text: '-',
    attrs: { 'data-action': 'decrease' },
  });
  const increaseButton = createElement(documentRef, 'button', {
    text: '+',
    attrs: { 'data-action': 'increase' },
  });

  root.append(countNode, statusNode, decreaseButton, increaseButton);
  documentRef.body.append(root);

  return root;
}

describe('counter click handlers', () => {
  it('syncs number, status, and decrease button availability', () => {
    const root = createCounterRoot();

    syncCounterUI(root, 0);
    expect(root.querySelector('[data-role="count"]').textContent).toBe('0');
    expect(root.querySelector('[data-role="status"]').textContent).toBe('Zero');
    expect(root.querySelector('[data-action="decrease"]').disabled).toBe(true);

    syncCounterUI(root, 3);
    expect(root.querySelector('[data-role="count"]').textContent).toBe('3');
    expect(root.querySelector('[data-role="status"]').textContent).toBe('Positive');
    expect(root.querySelector('[data-action="decrease"]').disabled).toBe(false);
  });

  it('responds to click events and never goes below zero', () => {
    const root = createCounterRoot();
    const state = { count: 0 };
    const increaseButton = root.querySelector('[data-action="increase"]');
    const decreaseButton = root.querySelector('[data-action="decrease"]');

    syncCounterUI(root, state.count);
    attachCounterHandlers(root, state);

    increaseButton.dispatchEvent({ type: 'click', bubbles: true });
    increaseButton.dispatchEvent({ type: 'click', bubbles: true });
    decreaseButton.dispatchEvent({ type: 'click', bubbles: true });
    decreaseButton.dispatchEvent({ type: 'click', bubbles: true });
    decreaseButton.dispatchEvent({ type: 'click', bubbles: true });

    expect(state.count).toBe(0);
    expect(root.querySelector('[data-role="status"]').textContent).toBe('Zero');
    expect(root.querySelector('[data-action="decrease"]').disabled).toBe(true);
  });

  it('builds one predictable snapshot after a sequence of clicks', () => {
    const root = createCounterRoot();

    expect(
      buildCounterSnapshot(root, ['increase', 'increase', 'decrease', 'increase']),
    ).toEqual({
      count: 2,
      status: 'Positive',
      isDecreaseDisabled: false,
    });
  });
});
