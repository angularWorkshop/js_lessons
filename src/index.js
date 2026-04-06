'use strict';

export function mergeWorkshopSettings(defaultSettings, userSettings) {
  // TODO: merge defaults and user settings
  return {};
}

export function buildSettingsSummary(defaultSettings, userSettings) {
  const settings = mergeWorkshopSettings(defaultSettings, userSettings);
  const theme = settings.theme;
  const language = settings.language;
  const pageSize = settings.pageSize;

  return ''; // TODO: return "Theme: ..., language: ..., page size: ..."
}
