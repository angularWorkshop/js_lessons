'use strict';

export function syncTodoItemUI(itemNode, todo) {
  const statusNode = itemNode.querySelector('[data-role="status"]');
  const button = itemNode.querySelector('[data-action="toggle"]');

  // TODO: reflect todo.done in DOM
  void statusNode;
  void button;
}

export function attachTodoDelegation(listNode, todos) {
  // TODO: add one click listener to the list
  // hint: use event.target.closest('[data-action="toggle"]')
  void listNode;
  void todos;
}

export function buildTodoSnapshot(listNode, todos, clickedIds) {
  attachTodoDelegation(listNode, todos);

  for (const id of clickedIds) {
    const itemNode = listNode.querySelector(`[data-item-id="${id}"]`);
    const button = itemNode.querySelector('[data-action="toggle"]');
    button.dispatchEvent({ type: 'click', bubbles: true });
  }

  return {
    doneIds: todos.filter(todo => todo.done).map(todo => todo.id),
    pendingIds: todos.filter(todo => !todo.done).map(todo => todo.id),
    doneCount: todos.filter(todo => todo.done).length,
  };
}
