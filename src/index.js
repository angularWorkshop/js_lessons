'use strict';

export function buildBaseSettings() {
  return {
    appearance: {
      theme: 'light',
      fontSize: 'medium',
    },
    notifications: {
      email: true,
      sms: false,
    },
  };
}

export function updateEmailNotifications(settings, enabled) {
  return {
    ...settings,
    notifications: {
      ...settings.notifications,
      email: enabled,
    },
  };
}

export function buildSettingsState(enabled) {
  const original = buildBaseSettings();
  const updated = updateEmailNotifications(original, enabled);

  return {
    originalEmail: original.notifications.email,
    updatedEmail: updated.notifications.email,
    smsStillEnabled: updated.notifications.sms,
    themeStill: updated.appearance.theme,
    sameReference: original === updated,
  };
}
