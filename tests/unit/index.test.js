import { describe, expect, it } from 'vitest';
import { applyIncomingComment, escapeHtml } from '../../src/index.js';

describe('safe comment feed', () => {
  it('escapes dangerous html characters', () => {
    expect(escapeHtml('<b>Hi & bye</b>')).toBe('&lt;b&gt;Hi &amp; bye&lt;/b&gt;');
    expect(escapeHtml('"quote" and \'apostrophe\'')).toBe('&quot;quote&quot; and &#39;apostrophe&#39;');
  });

  it('rejects messages from the wrong origin or wrong type', () => {
    const state = { items: [], rejectedCount: 0 };

    expect(
      applyIncomingComment(state, {
        origin: 'https://evil.example',
        data: { type: 'comment:new', payload: { id: '1', author: 'A', text: 'Hi' } },
      }, 'https://trusted.example'),
    ).toEqual({ items: [], rejectedCount: 1 });

    expect(
      applyIncomingComment(state, {
        origin: 'https://trusted.example',
        data: { type: 'ping', payload: { id: '1', author: 'A', text: 'Hi' } },
      }, 'https://trusted.example'),
    ).toEqual({ items: [], rejectedCount: 1 });
  });

  it('rejects invalid payload shapes', () => {
    expect(
      applyIncomingComment(
        { items: [], rejectedCount: 0 },
        {
          origin: 'https://trusted.example',
          data: { type: 'comment:new', payload: { id: '1', author: 'A' } },
        },
        'https://trusted.example',
      ),
    ).toEqual({ items: [], rejectedCount: 1 });
  });

  it('appends a safe comment for valid incoming events', () => {
    expect(
      applyIncomingComment(
        { items: [], rejectedCount: 0 },
        {
          origin: 'https://trusted.example',
          data: {
            type: 'comment:new',
            payload: {
              id: 'comment-1',
              author: '<Admin>',
              text: 'Ship <script>alert(1)</script>',
            },
          },
        },
        'https://trusted.example',
      ),
    ).toEqual({
      items: [{
        id: 'comment-1',
        authorHtml: '&lt;Admin&gt;',
        textHtml: 'Ship &lt;script&gt;alert(1)&lt;/script&gt;',
      }],
      rejectedCount: 0,
    });
  });
});
