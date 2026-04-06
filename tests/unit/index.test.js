import { describe, expect, it } from 'vitest';
import {
  buildSettingsSummary,
  mergeWorkshopSettings,
} from '../../src/index.js';

const defaultSettings = {
  theme: 'light',
  language: 'ru',
  pageSize: 10,
};

const userSettings = {
  language: 'en',
};

describe('merge default settings', () => {
  it('keeps defaults and applies user overrides', () => {
    expect(mergeWorkshopSettings(defaultSettings, userSettings)).toEqual({
      theme: 'light',
      language: 'en',
      pageSize: 10,
    });
  });

  it('builds a readable summary from the merged settings', () => {
    expect(buildSettingsSummary(defaultSettings, userSettings)).toBe(
      'Theme: light, language: en, page size: 10',
    );
  });

  it('does not lose defaults when user settings are empty', () => {
    expect(mergeWorkshopSettings(defaultSettings, {})).toEqual(defaultSettings);
  });
});
