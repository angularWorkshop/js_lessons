'use strict';

export function applyInterfaceState(root, theme, isReady) {
  const titleNode = root.querySelector('[data-role="theme-title"]');
  const buttonNode = root.querySelector('[data-role="theme-button"]');
  const statusNode = root.querySelector('[data-role="theme-status"]');
  const isDark = theme === 'dark';

  root.setAttribute('data-theme', theme);
  root.classList.toggle('page--dark', isDark);

  titleNode.textContent = isDark ? 'Dark theme enabled' : 'Light theme enabled';
  buttonNode.textContent = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  buttonNode.disabled = !isReady;

  statusNode.textContent = isReady ? 'Ready to continue' : 'Needs review';
  statusNode.setAttribute('data-state', isReady ? 'ready' : 'pending');
}

export function readInterfaceState(root) {
  const titleNode = root.querySelector('[data-role="theme-title"]');
  const buttonNode = root.querySelector('[data-role="theme-button"]');
  const statusNode = root.querySelector('[data-role="theme-status"]');

  return {
    theme: root.getAttribute('data-theme') ?? '',
    isDark: root.classList.contains('page--dark'),
    title: titleNode.textContent.trim(),
    buttonLabel: buttonNode.textContent.trim(),
    buttonDisabled: buttonNode.disabled,
    status: statusNode.textContent.trim(),
    statusState: statusNode.getAttribute('data-state') ?? '',
  };
}

export function buildInterfaceSnapshot(root, theme, isReady) {
  applyInterfaceState(root, theme, isReady);
  return readInterfaceState(root);
}
