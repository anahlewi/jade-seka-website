import React, { useState } from 'react';
import { Box, Typography, Stack, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Select, MenuItem, InputLabel, Button } from '@mui/material';

const eventOptions = [
  'Ceremony',
  'Reception',
  'After Party',
];

export default function RSVPForm({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    attending: '',
    plusOne: '',
    events: [],
    dietary: '',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventsChange = (e) => {
    setForm((prev) => ({ ...prev, events: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

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
      <FormControl component="fieldset" sx={{ mb: 2 }}>
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
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="events-label">Select the events you will be attending</InputLabel>
        <Select
          labelId="events-label"
          name="events"
          multiple
          value={form.events}
          onChange={handleEventsChange}
          label="Select the events you will be attending"
        >
          {eventOptions.map((event) => (
            <MenuItem key={event} value={event}>{event}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Dietary restrictions"
        name="dietary"
        value={form.dietary}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Would you like to send a note to the bride and groom?"
        name="note"
        value={form.note}
        onChange={handleChange}
        fullWidth
        multiline
        minRows={2}
        sx={{ mb: 2 }}
      />
      </Stack>
    
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#2C3607', color: 'white', fontFamily: 'Sekasfont-Regular', mt: 2, width: '100%' }}>
        Submit
      </Button>
    </Box>
  );
}
