// Helper to update RSVP data in SheetDB via API
// Usage: await updateRSVPInSheetDB(form)
export async function updateRSVPInSheetDB(form) {
  const SHEETDB_API_URL = `https://sheetdb.io/api/v1/qcqotidkxnz9p/id/${form.id}`; // Replace with your SheetDB API URL
  try {
    const response = await fetch(SHEETDB_API_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: {
        'Name': form.firstName + ' ' + form.lastName,
        'RSVP': form.attending,
        'Plus One?': form.plusOne,
        'Plus One Name': form.plusOneName,
        'Events': form.events.join(', '),
        'Dietary Restrictions': form.dietary,
        'Note': form.note,
      } }),
    });
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