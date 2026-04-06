'use strict';

export function buildBaseSettings() {
  // TODO: return the full base settings object
  return {};
}

export function updateEmailNotifications(settings, enabled) {
  // TODO: return a new settings object
  return settings;
}

export function buildSettingsState(enabled) {
  const original = buildBaseSettings();
  const updated = updateEmailNotifications(original, enabled);

  return {
    originalEmail: original.notifications?.email ?? null,
    updatedEmail: updated.notifications?.email ?? null,
    smsStillEnabled: null, // TODO: read updated.notifications.sms
    themeStill: '', // TODO: read updated.appearance.theme
    sameReference: original === updated,
  };
}
