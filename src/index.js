'use strict';

export function* createIdGenerator(prefix, start = 1) {
  let current = start;

  while (true) {
    yield prefix + '-' + current;
    current += 1;
  }
}
