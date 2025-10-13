import emailjs from '@emailjs/browser';

// Use environment variables for API endpoints
const SHEETDB_API_URL = process.env.REACT_APP_SHEETDB_API_URL;
const SHEETDB_USERLOG_URL = process.env.REACT_APP_SHEETDB_USERLOG_URL;

// Helper to update RSVP data in SheetDB via API
// Usage: await updateRSVPInSheetDB(form)
export async function updateRSVPInSheetDB(form) {
  const url = `${SHEETDB_API_URL}/id/${form.id}`;
  try {
    console.log('Submitting to SheetDB:', form);
    const response = await fetch(url, {
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

    await sendRSVPEmail(form);
    console.log('SheetDB response:', response);
    if (!response.ok) {
      console.log('Response not ok:', response);
      throw new Error('Failed to update RSVP in SheetDB');
    }
    // Send RSVP email to hosts after successful SheetDB update
    return await response.json();
  } catch (error) {
    console.error('Error updating RSVP in SheetDB:', error);
    throw error;
  }
}

// Helper to fetch user's full name by id from SheetDB
// Usage: const fullName = await getFullNameFromSheetDB(userId)
export async function getFullNameFromSheetDB(id) {
  const url = `${SHEETDB_API_URL}/search?id=${id}`;
  try {
    const response = await fetch(url);
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

/**
 * Logs the current date and time for the user who logged in to SheetDB UserLog sheet.
 * @param {string} userId - The unique identifier for the user.
 * @returns {Promise<object>} - The response from the SheetDB API.
 */
export async function logUserLogin(user) {
  const now = new Date();

    // Use toLocaleString() to format the date and time, including the timezone name
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short', // or 'long' for full timezone name
  };

  const payload = {
    data: [
        {
          'USER': user,
          'DATE': now.toLocaleString(undefined, options),
        }
      ]
    };
    try {
      const response = await fetch(SHEETDB_USERLOG_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      return await response.json();
    } catch (error) {
      console.error('Error logging user login:', error);
      throw error;
  }
}

/**
 * Sends an RSVP email to the hosts using EmailJS.
 * @param {object} form - The form data containing RSVP details.
 * @returns {Promise<object>} - The result from the EmailJS API.
 */
export async function sendRSVPEmail(form) {
  // Use environment variables for EmailJS service/template IDs
  const templateParams = {
    name: form.firstName,
    email: await guest_email(form.id),
  };

  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  )
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );

}

export async function guest_email(id) {
  const url = `${SHEETDB_API_URL}/search?id=${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch user from SheetDB');
    }
    const data = await response.json();
    // Assuming the response is an array of objects with a 'Name' field
    return data[0]?.Email || null;
  } catch (error) {
    console.error('Error fetching user from SheetDB:', error);
    throw error;
  }
}


