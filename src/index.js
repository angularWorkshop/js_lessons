'use strict';

export class Widget {
  constructor(id) {
    this.id = id;
    this.isMounted = false;
  }

  mount() {
    this.isMounted = true;
  }

  snapshot() {
    return {
      id: this.id,
      isMounted: this.isMounted,
    };
  }
}

export class NotificationWidget extends Widget {
  constructor(id, message) {
    // TODO: initialize the base widget and child state
    super(id);
    void message;
  }

  markAsRead() {
    // TODO: update the notification-specific state
  }

  snapshot() {
    // TODO: extend the base snapshot with child fields
    return super.snapshot();
  }
}
