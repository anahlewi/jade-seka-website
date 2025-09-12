import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Select, MenuItem, InputLabel, Button, Checkbox } from '@mui/material';
import { getGuestEventConfig } from '../utils/guestEventConfig';
import RSVPFormSubmitMessage from './RSVPFormSubmitMessage';


export default function RSVPForm({ onSubmit }) {
  const eventOptions = getGuestEventConfig().config.flatMap(c => c.events);
  const [form, setForm] = useState({
    id: localStorage.getItem('id') || '',
    firstName: '',
    lastName: '',
    attending: '',
    plusOne: '',
    plusOneName: '',
    events: [],
    dietary: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(form); // parent should return a promise
      setSubmitted(true);
      setError(false);
    } catch {
      setSubmitted(false);
      setError(true);
    }
  };

  if (submitted) {
    return <RSVPFormSubmitMessage success={true} error={false} onClose={() => setSubmitted(false)} />;
  }
  if (error) {
    return <RSVPFormSubmitMessage success={false} error={true} onClose={() => setError(false)} />;
  }


  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h3" sx={{ fontFamily: 'Sekasfont-Regular', mb: 3, textAlign: 'center' }}>
        RSVP
      </Typography>
      <FormLabel sx={{fontFamily:'EB Garamond'}} required>Full Name</FormLabel>
      <Stack direction={'row'} spacing={2} sx={{ mb: 2, fontFamily:'EB Garamond'}}>
        <TextField
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder='First'
        fullWidth
        required
        sx={{ mb: 2 }}
        />
        <TextField
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder='Last'
            fullWidth
            required
            sx={{ mb: 2 }}
        />
      </Stack>
      
      <Stack direction={'column'} spacing={2} sx={{ mb: 2, fontFamily:'EB Garamond'}}>
    
      <FormControl component="fieldset" sx={{ mb: 2 }} required>
        <FormLabel component="legend">Select the event(s) you will be attending:</FormLabel>
        <RadioGroup
          row
          name="plusOne"
          value={form.plusOne}
          onChange={handleChange}
        >
            {eventOptions.map((event) => (
              <FormControlLabel key={event} control={<Checkbox />} label={event} value={event} checked={form.events.includes(event)} onChange={(e) => {
                const newEvents = e.target.checked
                  ? [...form.events, event]
                  : form.events.filter(ev => ev !== event);
                setForm((prev) => ({ ...prev, events: newEvents }));
              }} />
            ))} 

        </RadioGroup>
      </FormControl>

       <FormControl component="fieldset" sx={{ mb: 2 }} required>
        <FormLabel component="legend">Do you intend to bring a plus one?</FormLabel>
        <RadioGroup
          row
          name="plusOne"
          value={form.plusOne}
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

       <FormControl component="fieldset" sx={{ mb: 2}}>
        <FormLabel sx={{fontFamily:'EB Garamond'}} >If yes, please provide their full name:</FormLabel>
        <TextField
            name="plusOneName"
            value={form.plusOneName}
            onChange={handleChange}
            fullWidth
        />
      </FormControl>
    
      <FormControl fullWidth sx={{ mb: 2 }} required>
        <FormLabel sx={{fontFamily:'EB Garamond'}} >Any dietary restrictions?</FormLabel>
        <TextField
            name="dietary"
            value={form.dietary}
            onChange={handleChange}
            fullWidth
        />
      </FormControl>

       <FormControl fullWidth sx={{ mb: 2 }}>
        <FormLabel sx={{fontFamily:'EB Garamond'}} >Would you like to send a note to the bride and groom?</FormLabel>
        <TextField
            name="note"
            value={form.note}
            onChange={handleChange}
            fullWidth
        />
      </FormControl>
      </Stack>
    
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#2C3607', color: 'white', fontFamily: 'Sekasfont-Regular', mt: 2, width: '100%' }}>
        Submit
      </Button>
    </Box>
  );
}
