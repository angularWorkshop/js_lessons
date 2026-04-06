import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  buildDomSnapshot,
  readCourseSummary,
  readLessonTitles,
} from '../../src/index.js';

function createCourseRoot() {
  const documentRef = createFakeDocument();
  const root = createElement(documentRef, 'section');

  const title = createElement(documentRef, 'h1', {
    text: ' JavaScript in Browser ',
    dataset: { role: 'course-title' },
  });
  const status = createElement(documentRef, 'p', {
    text: ' Ready ',
    dataset: { role: 'course-status' },
  });
  const count = createElement(documentRef, 'span', {
    text: '3',
    dataset: { role: 'course-count' },
  });

  const list = createElement(documentRef, 'div');
  list.append(
    createElement(documentRef, 'article', {
      children: [
        createElement(documentRef, 'h3', {
          text: ' DOM basics ',
          dataset: { role: 'lesson-title' },
        }),
      ],
    }),
    createElement(documentRef, 'article', {
      children: [
        createElement(documentRef, 'h3', {
          text: ' Active item ',
          dataset: { role: 'lesson-title' },
        }),
      ],
    }),
    createElement(documentRef, 'article', {
      children: [
        createElement(documentRef, 'h3', {
          text: ' Render cards ',
          dataset: { role: 'lesson-title' },
        }),
      ],
    }),
  );

  root.append(title, status, count, list);
  documentRef.body.append(root);

  return root;
}

describe('read a DOM summary', () => {
  it('reads the main course summary from the DOM', () => {
    const root = createCourseRoot();

    expect(readCourseSummary(root)).toEqual({
      title: 'JavaScript in Browser',
      status: 'Ready',
      lessonsCount: 3,
    });
  });

  it('collects lesson titles from the DOM tree', () => {
    const root = createCourseRoot();

    expect(readLessonTitles(root)).toEqual([
      'DOM basics',
      'Active item',
      'Render cards',
    ]);
  });

  it('builds one predictable snapshot from the page', () => {
    const root = createCourseRoot();

    expect(buildDomSnapshot(root)).toEqual({
      summary: {
        title: 'JavaScript in Browser',
        status: 'Ready',
        lessonsCount: 3,
      },
      lessonTitles: ['DOM basics', 'Active item', 'Render cards'],
      hasLessons: true,
    });
  });
});
