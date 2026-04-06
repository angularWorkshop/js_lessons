import { describe, expect, it } from 'vitest';
import { escapeHtml, renderCommentCard } from '../../src/index.js';

describe('safe comment rendering', () => {
  it('escapes dangerous symbols', () => {
    expect(escapeHtml('<script>alert("x")</script>')).toBe('&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;');
  });

  it('uses escaped text inside the final HTML string', () => {
    expect(renderCommentCard('Anna', '<b>Hello</b>')).toBe(
      '<article><strong>Anna</strong><p>&lt;b&gt;Hello&lt;/b&gt;</p></article>',
    );
  });

  it('keeps normal text readable', () => {
    expect(renderCommentCard('Max', 'Plain text')).toBe(
      '<article><strong>Max</strong><p>Plain text</p></article>',
    );
  });
});
