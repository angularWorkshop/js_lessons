'use strict';

export function buildShoppingList(firstItem, secondItem) {
  // TODO: return an array with both items
  return [];
}

export function addShoppingItem(items, nextItem) {
  const updatedItems = [];

  // TODO: copy the existing items and add nextItem to the end

  return updatedItems;
}

export function buildShoppingState(firstItem, secondItem, nextItem) {
  const initialItems = buildShoppingList(firstItem, secondItem);
  const updatedItems = addShoppingItem(initialItems, nextItem);

  return {
    initialItems,
    updatedItems,
    count: 0, // TODO: number of items in updatedItems
    lastItem: null, // TODO: last item from updatedItems
  };
}
