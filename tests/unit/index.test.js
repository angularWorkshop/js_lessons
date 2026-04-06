import { describe, expect, it } from 'vitest';
import { applyThemeMessage } from '../../src/index.js';

describe('safe postMessage filter', () => {
  it('rejects messages from the wrong origin', () => {
    expect(
      applyThemeMessage(
        {
          origin: 'https://evil.example',
          data: { type: 'theme:update', payload: { theme: 'dark' } },
        },
        'https://trusted.example',
      ),
    ).toEqual({
      accepted: false,
      theme: 'light',
      reason: 'origin',
    });
  });

  it('rejects unsupported types and invalid payloads', () => {
    expect(
      applyThemeMessage(
        {
          origin: 'https://trusted.example',
          data: { type: 'message:new', payload: { theme: 'dark' } },
        },
        'https://trusted.example',
        'dark',
      ),
    ).toEqual({
      accepted: false,
      theme: 'dark',
      reason: 'type',
    });

    expect(
      applyThemeMessage(
        {
          origin: 'https://trusted.example',
          data: { type: 'theme:update', payload: { theme: 'sepia' } },
        },
        'https://trusted.example',
        'dark',
      ),
    ).toEqual({
      accepted: false,
      theme: 'dark',
      reason: 'payload',
    });
  });

  it('accepts a trusted theme update and returns the new theme', () => {
    expect(
      applyThemeMessage(
        {
          origin: 'https://trusted.example',
          data: { type: 'theme:update', payload: { theme: 'dark' } },
        },
        'https://trusted.example',
      ),
    ).toEqual({
      accepted: true,
      theme: 'dark',
      reason: '',
    });
  });
});
