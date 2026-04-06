'use strict';

export function normalizeVisitorName(name) {
  const normalized = String(name ?? '').trim();
  return normalized || 'Guest';
}

export function parseParticipants(rawValue) {
  const parsed = Number(rawValue);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    return 1;
  }

  return parsed;
}

export function buildSeatLabels(count) {
  const labels = [];

  for (let index = 1; index <= count; index += 1) {
    labels.push('Seat ' + index);
  }

  return labels;
}

export function buildPlaygroundState(input) {
  const visitorName = normalizeVisitorName(input.name);
  const participants = parseParticipants(input.participants);
  const baseTotal = input.pricePerPerson * participants;
  const discount = input.hasPromo && participants >= 3 ? 0.2 : 0;
  const total = Number((baseTotal * (1 - discount)).toFixed(2));
  const accessLabel = participants > 1 ? 'Group booking' : 'Solo booking';

  return {
    visitorName,
    participants,
    seatLabels: buildSeatLabels(participants),
    total,
    accessLabel,
  };
}
