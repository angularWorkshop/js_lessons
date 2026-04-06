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
    super(id);
    this.message = message;
    this.isRead = false;
  }

  markAsRead() {
    this.isRead = true;
  }

  snapshot() {
    return {
      ...super.snapshot(),
      message: this.message,
      isRead: this.isRead,
    };
  }
}
