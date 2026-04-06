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
  // TODO: return a callback that will keep notifier as its context later
  void notifier;
}

export function runLater(callback, message) {
  return callback(message);
}
