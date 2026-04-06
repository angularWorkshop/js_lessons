'use strict';

export function countComments(comments) {
  let total = 0;

  for (const comment of comments) {
    total += 1;
    total += countComments(comment.children ?? []);
  }

  return total;
}
