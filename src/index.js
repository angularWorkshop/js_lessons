'use strict';

export function applyThemeMessage(event, allowedOrigin, previousTheme = 'light') {
  if (event.origin !== allowedOrigin) {
    return {
      accepted: false,
      theme: previousTheme,
      reason: 'origin',
    };
  }

  if (event.data?.type !== 'theme:update') {
    return {
      accepted: false,
      theme: previousTheme,
      reason: 'type',
    };
  }

  const theme = event.data?.payload?.theme;
  if (theme !== 'light' && theme !== 'dark') {
    return {
      accepted: false,
      theme: previousTheme,
      reason: 'payload',
    };
  }

  return {
    accepted: true,
    theme,
    reason: '',
  };
}
