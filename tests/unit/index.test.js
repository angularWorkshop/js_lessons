import { describe, expect, it } from 'vitest';
import {
  buildAddress,
  buildProfileState,
  buildUserProfile,
} from '../../src/index.js';

describe('build user profile object', () => {
  it('builds a nested address object', () => {
    expect(buildAddress('Moscow', 'Russia')).toEqual({
      city: 'Moscow',
      country: 'Russia',
    });
  });

  it('builds one profile object from separate values', () => {
    expect(buildUserProfile('Anna', 'Lee', 'Moscow', 'Russia')).toEqual({
      firstName: 'Anna',
      lastName: 'Lee',
      fullName: 'Anna Lee',
      address: {
        city: 'Moscow',
        country: 'Russia',
      },
      isActive: true,
    });
  });

  it('builds a predictable state with profile and summary', () => {
    expect(buildProfileState('Anna', 'Lee', 'Moscow', 'Russia')).toEqual({
      profile: {
        firstName: 'Anna',
        lastName: 'Lee',
        fullName: 'Anna Lee',
        address: {
          city: 'Moscow',
          country: 'Russia',
        },
        isActive: true,
      },
      summary: 'Anna Lee - Moscow, Russia',
    });
  });
});
