import { describe, expect, it } from 'vitest';
import { UserCardElement } from '../../src/index.js';

describe('user card element', () => {
  it('updates fields from attributes', () => {
    const element = new UserCardElement();

    element.attributeChangedCallback('name', null, 'Anna');
    element.attributeChangedCallback('role', null, 'Mentor');

    expect(element.name).toBe('Anna');
    expect(element.role).toBe('Mentor');
  });

  it('renders a stable inactive card by default', () => {
    const element = new UserCardElement();

    expect(element.render()).toBe('<article class="user-card user-card--inactive"><h3>Anonymous</h3><p>Guest</p><span>Inactive</span></article>');
  });

  it('reflects sequential attribute changes in the final render output', () => {
    const element = new UserCardElement();

    element.attributeChangedCallback('name', null, 'Max');
    element.attributeChangedCallback('role', null, 'Author');
    element.attributeChangedCallback('active', null, 'true');
    element.attributeChangedCallback('name', 'Max', 'Mila');

    expect(element.render()).toBe('<article class="user-card user-card--active"><h3>Mila</h3><p>Author</p><span>Active</span></article>');
  });
});
