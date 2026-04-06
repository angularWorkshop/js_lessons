import { describe, expect, it } from 'vitest';
import {
  buildPlaygroundState,
  buildSeatLabels,
  normalizeVisitorName,
  parseParticipants,
} from '../../src/index.js';

describe('interactive playground state', () => {
  it('normalizes visitor name and participant count', () => {
    expect(normalizeVisitorName('  Anna  ')).toBe('Anna');
    expect(normalizeVisitorName('   ')).toBe('Guest');
    expect(parseParticipants('4')).toBe(4);
    expect(parseParticipants('0')).toBe(1);
  });

  it('builds seat labels without gaps', () => {
    expect(buildSeatLabels(3)).toEqual(['Seat 1', 'Seat 2', 'Seat 3']);
  });

  it('builds a solo booking snapshot without promo discount', () => {
    expect(
      buildPlaygroundState({
        name: '  Max  ',
        participants: '1',
        pricePerPerson: 50,
        hasPromo: false,
      }),
    ).toEqual({
      visitorName: 'Max',
      participants: 1,
      seatLabels: ['Seat 1'],
      total: 50,
      accessLabel: 'Solo booking',
    });
  });

  it('builds a group booking snapshot with promo discount', () => {
    expect(
      buildPlaygroundState({
        name: '  ',
        participants: '3',
        pricePerPerson: 40,
        hasPromo: true,
      }),
    ).toEqual({
      visitorName: 'Guest',
      participants: 3,
      seatLabels: ['Seat 1', 'Seat 2', 'Seat 3'],
      total: 96,
      accessLabel: 'Group booking',
    });
  });
});
