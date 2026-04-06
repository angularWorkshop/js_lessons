'use strict';

export function setActiveMenuItem(root, targetId) {
  const items = root.querySelectorAll('[data-menu-id]');

  for (const item of items) {
    const itemId = item.getAttribute('data-menu-id');
    const isActive = itemId === targetId;

    // TODO: keep only the target item active
    // hint: update class "is-active" and aria-current consistently
    void isActive;
  }
}

export function readActiveMenuItem(root) {
  // TODO: find the active item and return its id and text label
  return {
    id: '',
    label: '',
  };
}

export function buildMenuState(root, targetId) {
  setActiveMenuItem(root, targetId);
  const activeItem = readActiveMenuItem(root);

  return {
    ...activeItem,
    activeCount: 0, // TODO: count how many active items exist after the switch
  };
}
