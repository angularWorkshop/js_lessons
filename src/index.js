'use strict';

export function syncTodoItemUI(itemNode, todo) {
  const statusNode = itemNode.querySelector('[data-role="status"]');
  const button = itemNode.querySelector('[data-action="toggle"]');

  itemNode.classList.toggle('is-done', todo.done);
  statusNode.textContent = todo.done ? 'Done' : 'Pending';
  button.textContent = todo.done ? 'Undo' : 'Mark done';
}

export function attachTodoDelegation(listNode, todos) {
  listNode.addEventListener('click', event => {
    const button = event.target.closest('[data-action="toggle"]');
    if (!button) {
      return;
    }

    const itemNode = button.closest('[data-item-id]');
    const todoId = itemNode.getAttribute('data-item-id');
    const todo = todos.find(entry => entry.id === todoId);

    if (!todo) {
      return;
    }

    todo.done = !todo.done;
    syncTodoItemUI(itemNode, todo);
  });
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
