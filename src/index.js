'use strict';

export function buildAddress(city, country) {
  // TODO: return an object with city and country
  return {};
}

export function buildUserProfile(firstName, lastName, city, country) {
  const address = buildAddress(city, country);

  // TODO: return one profile object
  return {};
}

export function buildProfileState(firstName, lastName, city, country) {
  const profile = buildUserProfile(firstName, lastName, city, country);

  return {
    profile,
    summary: '', // TODO: `${profile.fullName} - ${profile.address.city}, ${profile.address.country}`
  };
}
