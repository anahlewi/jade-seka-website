import React from 'react';
import { Box, Typography, Stack, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Button, Checkbox, useMediaQuery } from '@mui/material';

export default function RSVPFormFields({
  form,
  fieldErrors,
  eventOptions,
  handleChange,
  handleSubmit,
  isMobile,
  alreadyRSVPed
}) {
  if (alreadyRSVPed) {
    return null;
  }

  return (
    <Box component="form"
      onSubmit={handleSubmit}
      sx={isMobile ? {
        width: '95vw',
        maxWidth: 400,
        marginLeft: 0.5,
        alignContent: 'center',
        flexDirection: 'column'
      } : {
        width: '100%',
        maxWidth: 400,
        mx: 'auto'
      }}>
      <Typography variant="h3" sx={{ fontFamily: 'Sekasfont-Regular', mb: 3, textAlign: 'center' }}>
        RSVP
      </Typography>
      <FormLabel sx={{ fontFamily: 'EB Garamond' }} required>Full Name</FormLabel>
      <Stack direction={'row'} spacing={2} sx={{ mb: 2, fontFamily: 'EB Garamond' }}>
        <TextField
          name="firstName"
          value={form.firstName}
          error={fieldErrors.firstName}
          onChange={handleChange}
          placeholder='First'
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          name="lastName"
          value={form.lastName}
          error={fieldErrors.lastName}
          onChange={handleChange}
          placeholder='Last'
          fullWidth
          sx={{ mb: 2 }}
        />
      </Stack>
      {fieldErrors.firstName && fieldErrors.lastName && (
        <Typography color="error" sx={{ mt: -1, textAlign: 'left', fontFamily: 'EB Garamond' }}>
          Your full name is required.
        </Typography>)}
      <Stack direction={'column'} spacing={2} sx={{ mb: 2, fontFamily: 'EB Garamond' }}>
        <FormControl component="fieldset" sx={{ mb: 2 }} required error={false}>
          <FormLabel component="legend">Select the event(s) you will be attending:</FormLabel>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {eventOptions.map((event) => (
              <FormControlLabel
                key={event}
                control={
                  <Checkbox
                    sx={{ color:'#F77F9F', '&.Mui-checked': { color: '#F77F9F' } }}
                    disabled={form.events.includes("None")}
                  />
                }
                label={event}
                value={event}
                checked={form.events.includes(event)}
                onChange={(e) => {
                  const newEvents = e.target.checked
                    ? [...form.events, event]
                    : form.events.filter(ev => ev !== event);
                  handleChange({ target: { name: 'events', value: newEvents } });
                }}
              />
            ))}
            <FormControlLabel
              key="None"
              control={
                <Checkbox
                  sx={{ color:'#F77F9F', '&.Mui-checked': { color: '#F77F9F' } }}
                  checked={form.events.includes("None")}
                />
              }
              label="None"
              value="None"
              onChange={(e) => {
                if (e.target.checked) {
                  handleChange({ target: { name: 'events', value: ["None"] } });
                } else {
                  handleChange({ target: { name: 'events', value: [] } });
                }
              }}
            />
          </Box>
          {fieldErrors.events && (
            <Typography color="error" sx={{ mt: -1, textAlign: 'left', fontFamily: 'EB Garamond' }}>
              Please select the event(s) you plan to attend
            </Typography>
          )}
        </FormControl>
        <FormControl component="fieldset" sx={{ mb: 2 }} required error={false}>
          <FormLabel id="radio-buttons-group-label" component="legend">Do you intend to bring a plus one?</FormLabel>
          <RadioGroup
            row
            name="plusOne"
            aria-labelledby='radio-buttons-group-label'
            value={form.plusOne}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio sx={{ '&.Mui-checked': { color: '#F77F9F' }, }} />} label="Yes" />
            <FormControlLabel value="no" color={fieldErrors.plusOne ? 'error' : 'default'} control={<Radio sx={{ '&.Mui-checked': { color: '#F77F9F' }, }} />} label="No" />
          </RadioGroup>
          {fieldErrors.plusOne && (
            <Typography color="error" sx={{ mt: -1, textAlign: 'left', fontFamily: 'EB Garamond' }}>
              Please indicate if you plan to bring a guest
            </Typography>
          )}
        </FormControl>
        {form.plusOne === 'yes' && <FormControl component="fieldset" sx={{ mb: 2 }} error={false}>
          <FormLabel sx={{ fontFamily: 'EB Garamond' }} >If yes, please provide their full name:</FormLabel>
          <TextField
            name="plusOneName"
            value={form.plusOneName}
            placeholder="Guest's Full Name"
            onChange={handleChange}
            fullWidth
          />
        </FormControl>}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel sx={{ fontFamily: 'EB Garamond' }} >Any dietary restrictions?</FormLabel>
          <TextField
            name="dietary"
            value={form.dietary}
            placeholder='e.g. vegetarian, gluten-free, etc.'
            onChange={handleChange}
            fullWidth
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }} error={false}>
          <FormLabel sx={{ fontFamily: 'EB Garamond' }} >Would you like to send a note to the bride and groom?</FormLabel>
          <TextField
            name="note"
            value={form.note}
            onChange={handleChange}
            fullWidth
          />
        </FormControl>
      </Stack>
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#2C3607', color: 'white', fontFamily: 'Sekasfont-Regular', fontSize:'1.2em',  mt: 2, width: '100%' }}>
        Submit
      </Button>
    </Box>
  );
}
