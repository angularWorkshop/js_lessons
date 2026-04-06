'use strict';

export function applyInterfaceState(root, theme, isReady) {
  const titleNode = root.querySelector('[data-role="theme-title"]');
  const buttonNode = root.querySelector('[data-role="theme-button"]');
  const statusNode = root.querySelector('[data-role="theme-status"]');

  // TODO: update theme, classes, texts, and button state consistently
  void titleNode;
  void buttonNode;
  void statusNode;
  void theme;
  void isReady;
}

export function readInterfaceState(root) {
  const titleNode = root.querySelector('[data-role="theme-title"]');
  const buttonNode = root.querySelector('[data-role="theme-button"]');
  const statusNode = root.querySelector('[data-role="theme-status"]');

  return {
    theme: '', // TODO: read data-theme from the root
    isDark: false, // TODO: check whether the root has class page--dark
    title: titleNode.textContent.trim(),
    buttonLabel: buttonNode.textContent.trim(),
    buttonDisabled: buttonNode.disabled,
    status: statusNode.textContent.trim(),
    statusState: '', // TODO: read data-state from the status node
  };
}

export function buildInterfaceSnapshot(root, theme, isReady) {
  applyInterfaceState(root, theme, isReady);
  return readInterfaceState(root);
}
