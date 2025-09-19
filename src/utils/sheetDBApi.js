// Helper to update RSVP data in SheetDB via API
// Usage: await updateRSVPInSheetDB(form)
export async function updateRSVPInSheetDB(form) {
  const SHEETDB_API_URL = `https://sheetdb.io/api/v1/qcqotidkxnz9p/id/${form.id}`; // Replace with your SheetDB API URL
  try {
    console.log('Submitting to SheetDB:', form);
    const response = await fetch(SHEETDB_API_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: {
        'Name': form.firstName + ' ' + form.lastName,
        'RSVP': form.events.includes('None') ? "Can't Attend" : 'Yes',
        'Plus One?': form.plusOne,
        'Plus One Name': form.plusOneName,
        'Events': form.events.join(', '),
        'Dietary Restrictions': form.dietary,
        'Note': form.note,
      } }),
    });
    console.log('SheetDB response:', response);
    if (!response.ok) {
      console.log('Response not ok:', response);
      throw new Error('Failed to update RSVP in SheetDB');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating RSVP in SheetDB:', error);
    throw error;
  }
}

// Helper to fetch user's full name by id from SheetDB
// Usage: const fullName = await getFullNameFromSheetDB(userId)
export async function getFullNameFromSheetDB(id) {
  const SHEETDB_API_URL = `https://sheetdb.io/api/v1/qcqotidkxnz9p/search?id=${id}`;
  try {
    const response = await fetch(SHEETDB_API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch user from SheetDB');
    }
    const data = await response.json();
    // Assuming the response is an array of objects with a 'Name' field
    return data[0]?.Name || null;
  } catch (error) {
    console.error('Error fetching user from SheetDB:', error);
    throw error;
  }
}