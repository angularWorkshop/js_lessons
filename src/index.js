'use strict';

export function syncCounterUI(root, count) {
  const countNode = root.querySelector('[data-role="count"]');
  const statusNode = root.querySelector('[data-role="status"]');
  const decreaseButton = root.querySelector('[data-action="decrease"]');

  countNode.textContent = String(count);
  statusNode.textContent = count > 0 ? 'Positive' : 'Zero';
  decreaseButton.disabled = count === 0;
}

export function attachCounterHandlers(root, state) {
  const increaseButton = root.querySelector('[data-action="increase"]');
  const decreaseButton = root.querySelector('[data-action="decrease"]');

  increaseButton.addEventListener('click', () => {
    state.count += 1;
    syncCounterUI(root, state.count);
  });

  decreaseButton.addEventListener('click', () => {
    state.count = Math.max(0, state.count - 1);
    syncCounterUI(root, state.count);
  });
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
