// Utility to get guest event config from localStorage and map events per city
export function getGuestEventConfig() {
  const rawCities = localStorage.getItem('guestCities') || '';
  const citiesInvitedTo = rawCities.split(/\s*,\s*/).filter(Boolean);
  // Map of city keys to RSVP events and content-filtering visibility keys
  const cityConfig = {
    'Uganda Guests': {
      events: ['Celebration of Love in Uganda'],
      visibilityKeys: ['Wedding Party'],
    },
    'Zanzibar Guests': {
      events: ['Welcome Party', 'Friends & Family Dinner', 'Wedding Ceremony'],
      visibilityKeys: ['Wedding Ceremony'],
    },
  };
  // Build config for each city
  const config = citiesInvitedTo.map(city => ({
    city,
    events: cityConfig[city]?.events || [],
    visibilityKeys: cityConfig[city]?.visibilityKeys || [],
  }));
  return { citiesInvitedTo, config };
}
