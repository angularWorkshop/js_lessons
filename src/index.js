'use strict';

export function buildMenuPaths(items, parentPath = '') {
  const result = [];

  for (const item of items) {
    const currentPath = parentPath ? parentPath + '/' + item.slug : '/' + item.slug;
    result.push(currentPath);
    result.push(...buildMenuPaths(item.children ?? [], currentPath));
  }

  return result;
}
