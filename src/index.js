'use strict';

export function buildShoppingList(firstItem, secondItem) {
  return [firstItem, secondItem];
}

export function addShoppingItem(items, nextItem) {
  const updatedItems = items.slice();
  updatedItems.push(nextItem);
  return updatedItems;
}

export function buildShoppingState(firstItem, secondItem, nextItem) {
  const initialItems = buildShoppingList(firstItem, secondItem);
  const updatedItems = addShoppingItem(initialItems, nextItem);

  return {
    initialItems,
    updatedItems,
    count: updatedItems.length,
    lastItem: updatedItems[updatedItems.length - 1],
  };
}
