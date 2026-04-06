import { describe, expect, it } from 'vitest';
import {
  buildBaseSettings,
  buildSettingsState,
  updateEmailNotifications,
} from '../../src/index.js';

describe('update nested settings', () => {
  it('returns the full base settings object', () => {
    expect(buildBaseSettings()).toEqual({
      appearance: {
        theme: 'light',
        fontSize: 'medium',
      },
      notifications: {
        email: true,
        sms: false,
      },
    });
  });

  it('updates only email notifications and keeps the rest', () => {
    expect(updateEmailNotifications(buildBaseSettings(), false)).toEqual({
      appearance: {
        theme: 'light',
        fontSize: 'medium',
      },
      notifications: {
        email: false,
        sms: false,
      },
    });
  });

  it('builds a state object that shows what changed and what stayed', () => {
    expect(buildSettingsState(false)).toEqual({
      originalEmail: true,
      updatedEmail: false,
      smsStillEnabled: false,
      themeStill: 'light',
      sameReference: false,
    });
  });
});
