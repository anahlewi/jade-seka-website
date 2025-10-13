import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { getGuestEventConfig } from '../utils/guestEventConfig';
import { getFullNameFromSheetDB } from '../utils/sheetDBApi';
import RSVPFormSubmitMessage from './RSVPFormSubmitMessage';
import RSVPFormFields from './RSVPFormFields';


export default function RSVPForm({ onSubmit }) {
  const eventOptions = getGuestEventConfig().config.flatMap(c => c.events);
  
  const [form, setForm] = useState({
    id: localStorage.getItem('id') || '',
    firstName: '',
    lastName: '',
    plusOne: '',
    plusOneName: '',
    events: [],
    dietary: '',
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [alreadyRSVPed, setAlreadyRSVPed] = useState(localStorage.getItem('RSVPStatus'));
  const isMobile = useMediaQuery('(max-width:900px)');


  const requiredFields = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'events', label: 'Event(s) Attending' },
    { name: 'plusOne', label: 'Plus One' },
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log('Form updated:', form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    for (const field of requiredFields) {
      if (field.name === 'events' && form.events.length === 0) {
        errors.events = true;
      } else if (!form[field.name]) {
        errors[field.name] = true;
      }
    }
    setFieldErrors(errors);
    console.log('Validation errors:', errors);
    if (Object.keys(errors).length > 0) return;
    try {
      await onSubmit(form); // parent should return a promise
      console.log('RSVP submitted successfully');
      setSubmitted(true);
      localStorage.setItem('RSVPStatus', 'Yes');
      setAlreadyRSVPed(true);
      setError(false);
    } catch {
        console.log('Error submitting RSVP');
      setSubmitted(false);
      setError(true);
    }
  };

  // Autofill name from SheetDB if id exists
  useEffect(() => {
    async function autofillName() {
      if (form.id) {
        try {
          const fullName = await getFullNameFromSheetDB(form.id);
          if (fullName) {
            const [firstName, ...lastNameArr] = fullName.split(' ');
            setForm((prev) => ({
              ...prev,
              firstName: firstName || '',
              lastName: lastNameArr.join(' ') || '',
            }));
          }
        } catch (err) {
          console.error('Could not autofill name:', err);
        }
      }
    }
    autofillName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.id]);

  if (submitted) {
    return <RSVPFormSubmitMessage success={true} error={false} onClose={() => setSubmitted(false)} />;
  }
  if (error) {
    return <RSVPFormSubmitMessage success={false} error={true} onClose={() => setError(false)} />;
  }

  return (
    alreadyRSVPed ?
    (<RSVPFormSubmitMessage success={true} error={false} />): (
      <RSVPFormFields
        form={form}
        fieldErrors={fieldErrors}
        eventOptions={eventOptions}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isMobile={isMobile}
        alreadyRSVPed={alreadyRSVPed}
      />
    )
  );
}
