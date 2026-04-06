'use strict';

export function buildAddress(city, country) {
  return {
    city,
    country,
  };
}

export function buildUserProfile(firstName, lastName, city, country) {
  const address = buildAddress(city, country);

  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    address,
    isActive: true,
  };
}

export function buildProfileState(firstName, lastName, city, country) {
  const profile = buildUserProfile(firstName, lastName, city, country);

  return {
    profile,
    summary: `${profile.fullName} - ${profile.address.city}, ${profile.address.country}`,
  };
}
