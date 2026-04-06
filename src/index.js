'use strict';

export function createNotifier(prefix) {
  return {
    prefix,
    format(message) {
      return this.prefix + ": " + message;
    },
  };
}

export function createSavedFormatter(notifier) {
  return notifier.format.bind(notifier);
}

export function runLater(callback, message) {
  return callback(message);
}
