import { describe, expect, it } from 'vitest';
import { createElement, createFakeDocument } from '../helpers/fake-dom.js';
import {
  attachTodoDelegation,
  buildTodoSnapshot,
  syncTodoItemUI,
} from '../../src/index.js';

function createTodoEnvironment() {
  const documentRef = createFakeDocument();
  const listNode = createElement(documentRef, 'section');
  const todos = [
    { id: 'intro', label: 'Read intro', done: false },
    { id: 'dom', label: 'Finish DOM task', done: true },
    { id: 'forms', label: 'Prepare form state', done: false },
  ];

  for (const todo of todos) {
    const itemNode = createElement(documentRef, 'article', {
      attrs: { 'data-item-id': todo.id },
      children: [
        createElement(documentRef, 'strong', {
          text: todo.label,
          dataset: { role: 'label' },
        }),
        createElement(documentRef, 'span', {
          dataset: { role: 'status' },
        }),
        createElement(documentRef, 'button', {
          text: '',
          attrs: { 'data-action': 'toggle' },
        }),
      ],
    });

    syncTodoItemUI(itemNode, todo);
    listNode.append(itemNode);
  }

  documentRef.body.append(listNode);
  return { listNode, todos };
}

describe('todo event delegation', () => {
  it('reflects todo.done in the DOM item state', () => {
    const { listNode, todos } = createTodoEnvironment();
    const introNode = listNode.querySelector('[data-item-id="intro"]');
    const domNode = listNode.querySelector('[data-item-id="dom"]');

    syncTodoItemUI(introNode, todos[0]);
    syncTodoItemUI(domNode, todos[1]);

    expect(introNode.classList.contains('is-done')).toBe(false);
    expect(introNode.querySelector('[data-role="status"]').textContent).toBe('Pending');
    expect(introNode.querySelector('[data-action="toggle"]').textContent).toBe('Mark done');

    expect(domNode.classList.contains('is-done')).toBe(true);
    expect(domNode.querySelector('[data-role="status"]').textContent).toBe('Done');
    expect(domNode.querySelector('[data-action="toggle"]').textContent).toBe('Undo');
  });

  it('toggles the correct todo through one delegated click handler', () => {
    const { listNode, todos } = createTodoEnvironment();
    attachTodoDelegation(listNode, todos);

    const introButton = listNode.querySelector(
      '[data-item-id="intro"] [data-action="toggle"]',
    );
    introButton.dispatchEvent({ type: 'click', bubbles: true });

    expect(todos[0].done).toBe(true);
    expect(
      listNode.querySelector('[data-item-id="intro"]').classList.contains('is-done'),
    ).toBe(true);
  });

  it('builds one predictable summary after several delegated clicks', () => {
    const { listNode, todos } = createTodoEnvironment();

    expect(buildTodoSnapshot(listNode, todos, ['intro', 'dom', 'forms'])).toEqual({
      doneIds: ['intro', 'forms'],
      pendingIds: ['dom'],
      doneCount: 2,
    });
  });
});
