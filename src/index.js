'use strict';

export function setActiveMenuItem(root, targetId) {
  const items = root.querySelectorAll('[data-menu-id]');

  for (const item of items) {
    const itemId = item.getAttribute('data-menu-id');
    const isActive = itemId === targetId;

    item.classList.toggle('is-active', isActive);

    if (isActive) {
      item.setAttribute('aria-current', 'page');
    } else {
      item.removeAttribute('aria-current');
    }
  }
}

export function readActiveMenuItem(root) {
  const activeItem = root.querySelector('.is-active');

  return {
    id: activeItem.getAttribute('data-menu-id'),
    label: activeItem.textContent.trim(),
  };
}

export function buildMenuState(root, targetId) {
  setActiveMenuItem(root, targetId);
  const activeItem = readActiveMenuItem(root);

  return {
    ...activeItem,
    activeCount: root.querySelectorAll('.is-active').length,
  };
}
