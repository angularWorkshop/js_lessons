'use strict';

export function mergeWorkshopSettings(defaultSettings, userSettings) {
  return {
    ...defaultSettings,
    ...userSettings,
  };
}

export function buildSettingsSummary(defaultSettings, userSettings) {
  const settings = mergeWorkshopSettings(defaultSettings, userSettings);
  const { theme, language, pageSize } = settings;

  return `Theme: ${theme}, language: ${language}, page size: ${pageSize}`;
}
