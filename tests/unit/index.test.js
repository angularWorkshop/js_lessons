import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  buildMenuState,
  readActiveMenuItem,
  setActiveMenuItem,
} from '../../src/index.js';

function createMenuRoot() {
  const documentRef = createFakeDocument();
  const root = createElement(documentRef, 'nav');

  const overview = createElement(documentRef, 'button', {
    text: 'Overview',
    className: 'is-active',
    attrs: {
      'data-menu-id': 'overview',
      'aria-current': 'page',
    },
  });
  const projects = createElement(documentRef, 'button', {
    text: 'Projects',
    attrs: {
      'data-menu-id': 'projects',
    },
  });
  const settings = createElement(documentRef, 'button', {
    text: 'Settings',
    attrs: {
      'data-menu-id': 'settings',
    },
  });

  root.append(overview, projects, settings);
  documentRef.body.append(root);

  return root;
}

describe('toggle active menu item', () => {
  it('keeps only the target item active', () => {
    const root = createMenuRoot();

    setActiveMenuItem(root, 'projects');

    const overview = root.querySelector('[data-menu-id="overview"]');
    const projects = root.querySelector('[data-menu-id="projects"]');

    expect(overview.classList.contains('is-active')).toBe(false);
    expect(overview.getAttribute('aria-current')).toBe(null);
    expect(projects.classList.contains('is-active')).toBe(true);
    expect(projects.getAttribute('aria-current')).toBe('page');
  });

  it('reads the current active menu item from the DOM', () => {
    const root = createMenuRoot();
    setActiveMenuItem(root, 'settings');

    expect(readActiveMenuItem(root)).toEqual({
      id: 'settings',
      label: 'Settings',
    });
  });

  it('builds one consistent menu state after the switch', () => {
    const root = createMenuRoot();

    expect(buildMenuState(root, 'projects')).toEqual({
      id: 'projects',
      label: 'Projects',
      activeCount: 1,
    });
  });
});
