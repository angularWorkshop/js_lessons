import { describe, expect, it } from 'vitest';
import { buildMenuPaths } from '../../src/index.js';

describe('flatten menu paths', () => {
  it('returns an empty list for empty input', () => {
    expect(buildMenuPaths([])).toEqual([]);
  });

  it('builds root and nested paths in traversal order', () => {
    const items = [
      {
        slug: 'docs',
        children: [
          { slug: 'intro', children: [] },
          { slug: 'advanced', children: [{ slug: 'generators', children: [] }] },
        ],
      },
      { slug: 'about', children: [] },
    ];

    expect(buildMenuPaths(items)).toEqual([
      '/docs',
      '/docs/intro',
      '/docs/advanced',
      '/docs/advanced/generators',
      '/about',
    ]);
  });

  it('supports nodes without children arrays', () => {
    expect(buildMenuPaths([{ slug: 'root' }])).toEqual(['/root']);
  });
});
