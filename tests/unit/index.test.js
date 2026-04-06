import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  buildCardsSnapshot,
  createLessonCard,
  renderLessonCards,
} from '../../src/index.js';

const lessons = [
  { id: 'dom-1', title: 'Read the DOM', level: 'beginner' },
  { id: 'dom-2', title: 'Toggle active item', level: 'beginner' },
  { id: 'dom-3', title: 'Render cards', level: 'intermediate' },
];

describe('render lesson cards', () => {
  it('creates one DOM card from one lesson object', () => {
    const documentRef = createFakeDocument();
    const card = createLessonCard(documentRef, lessons[0]);

    expect(card.tagName).toBe('ARTICLE');
    expect(card.classList.contains('lesson-card')).toBe(true);
    expect(card.getAttribute('data-lesson-id')).toBe('dom-1');
    expect(card.querySelector('[data-role="lesson-title"]').textContent).toBe('Read the DOM');
    expect(card.querySelector('[data-role="lesson-level"]').textContent).toBe('beginner level');
  });

  it('renders all lesson cards into the root container', () => {
    const documentRef = createFakeDocument();
    const root = createElement(documentRef, 'section');

    root.append(createElement(documentRef, 'p', { text: 'old content' }));
    renderLessonCards(root, lessons, documentRef);

    expect(root.querySelectorAll('.lesson-card')).toHaveLength(3);
    expect(root.querySelector('[data-role="lesson-title"]').textContent).toBe('Read the DOM');
    expect(root.querySelector('p').textContent).toBe('beginner level');
  });

  it('builds a snapshot from the rendered DOM result', () => {
    const documentRef = createFakeDocument();
    const root = createElement(documentRef, 'section');

    expect(buildCardsSnapshot(root, lessons, documentRef)).toEqual({
      count: 3,
      titles: ['Read the DOM', 'Toggle active item', 'Render cards'],
      firstId: 'dom-1',
    });
  });
});
