'use strict';

export class UserCardElement {
  constructor() {
    this.name = 'Anonymous';
    this.role = 'Guest';
    this.active = false;
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'name') {
      this.name = newValue || 'Anonymous';
    }

    if (name === 'role') {
      this.role = newValue || 'Guest';
    }

    if (name === 'active') {
      this.active = newValue === 'true';
    }
  }

  render() {
    const statusClass = this.active ? 'user-card user-card--active' : 'user-card user-card--inactive';
    const statusText = this.active ? 'Active' : 'Inactive';

    return '<article class="' + statusClass + '"><h3>' + this.name + '</h3><p>' + this.role + '</p><span>' + statusText + '</span></article>';
  }
}
