// Utility to get guest event config from localStorage and map events per city
export function getGuestEventConfig() {
  const rawCities = localStorage.getItem('guestCities') || '';
  const citiesInvitedTo = rawCities.split(/\s*,\s*/).filter(Boolean);
  // Map of city/event keys to events to display
  const eventMap = {
    'Uganda Guests': 'Kasiki',
    'Zanzibar Guests': 'Wedding',
  };
  // Build config for each city
  const config = citiesInvitedTo.map(city => ({
    city,
    events: eventMap[city] || [],
  }));
  return { citiesInvitedTo, config };
}
