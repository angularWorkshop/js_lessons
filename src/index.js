'use strict';

export class UserCardElement {
  constructor() {
    this.name = 'Anonymous';
    this.role = 'Guest';
    this.active = false;
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    // TODO: update name, role, and active from changed attributes
    void name;
    void _oldValue;
    void newValue;
  }

  render() {
    // TODO: return a stable HTML string for the current state
  }
}
