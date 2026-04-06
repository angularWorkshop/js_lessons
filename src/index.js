'use strict';

export function syncCounterUI(root, count) {
  const countNode = root.querySelector('[data-role="count"]');
  const statusNode = root.querySelector('[data-role="status"]');
  const decreaseButton = root.querySelector('[data-action="decrease"]');

  // TODO: keep the whole UI consistent with the current count
  void countNode;
  void statusNode;
  void decreaseButton;
}

export function attachCounterHandlers(root, state) {
  const increaseButton = root.querySelector('[data-action="increase"]');
  const decreaseButton = root.querySelector('[data-action="decrease"]');

  // TODO: attach click handlers that update state.count and refresh the UI
  void increaseButton;
  void decreaseButton;
  void state;
}

export function buildCounterSnapshot(root, actions) {
  const countNode = root.querySelector('[data-role="count"]');
  const increaseButton = root.querySelector('[data-action="increase"]');
  const decreaseButton = root.querySelector('[data-action="decrease"]');
  const state = {
    count: Number(countNode.textContent.trim()),
  };

  syncCounterUI(root, state.count);
  attachCounterHandlers(root, state);

  for (const action of actions) {
    const button = action === 'increase' ? increaseButton : decreaseButton;
    button.dispatchEvent({ type: 'click', bubbles: true });
  }

  return {
    count: Number(root.querySelector('[data-role="count"]').textContent.trim()),
    status: root.querySelector('[data-role="status"]').textContent.trim(),
    isDecreaseDisabled: root.querySelector('[data-action="decrease"]').disabled,
  };
}
