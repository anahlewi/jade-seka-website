import { Box, Typography, Stack, TextField, FormControl, FormLabel, Button, Checkbox, FormControlLabel } from '@mui/material';

const eventDateMap = {
  'Celebration of Love in Uganda': '(July 11)',
  'Welcome Party': '(July 14)',
  'Friends & Family Dinner': '(July 17)',
  'Wedding Ceremony': '(July 18)',
};

export default function RSVPFormFields({
  form,
  fieldErrors,
  eventOptions,
  handleChange,
  handleSubmit,
  isMobile,
  alreadyRSVPed,
  showChildFree
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
        paddingBottom: 15,
        alignContent: 'center',
        flexDirection: 'column'
      } : {
        width: '100%',
        maxWidth: 600,
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
          sx={{
            mb: 2,
            '& .MuiInputBase-input': { fontFamily: 'EB Garamond' },
            '& .MuiInputBase-input.Mui-disabled': {
              borderColor: '#F77F9F',
              WebkitTextStrokeColor: '#F77F9F',
              WebkitTextFillColor:' #F77F9F', // ensures color applies in Safari
            }
          }}
          disabled={!!form.firstName}
        />
        <TextField
          name="lastName"
          value={form.lastName}
          error={fieldErrors.lastName}
          onChange={handleChange}
          placeholder='Last'
          fullWidth
          sx={{
            mb: 2,
            '& .MuiInputBase-input': { fontFamily: 'EB Garamond' },
            '& .MuiInputBase-input.Mui-disabled': {
              WebkitTextFillColor:' #F77F9F', // ensures color applies in Safari
            }
          }}
          disabled={!!form.lastName}
        />
      </Stack>
      {fieldErrors.firstName && fieldErrors.lastName && (
        <Typography color="error" sx={{ mt: -1, textAlign: 'left', fontFamily: 'EB Garamond' }}>
          Your full name is required.
        </Typography>)}
      <Stack direction={'column'} spacing={2} sx={{ mb: 3, fontFamily: 'EB Garamond' }}>
        <FormControl component="fieldset" sx={{ mb: 2 }} required error={false}>
          <FormLabel component="legend">Select the event(s) you will be attending:</FormLabel>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            {eventOptions.map((event) => (
              <FormControlLabel
                key={event}
                control={
                  <Checkbox
                    sx={{ color:'#F77F9F', '&.Mui-checked': { color: '#F77F9F' } }}
                    checked={form.events.includes(event)}
                    onChange={(e) => {
                      let newEvents;
                      if (e.target.checked) {
                        newEvents = [...form.events.filter(ev => ev !== 'None'), event];
                      } else {
                        newEvents = form.events.filter(ev => ev !== event);
                      }
                      handleChange({ target: { name: 'events', value: newEvents } });
                    }}
                  />
                }
                label={`${event} ${eventDateMap[event] || ''}`}
              />
            ))}
            <FormControlLabel
              key="None"
              control={
                <Checkbox
                  sx={{ color:'#F77F9F', '&.Mui-checked': { color: '#F77F9F' } }}
                  checked={form.events.includes("None")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleChange({ target: { name: 'events', value: ["None"] } });
                    } else {
                      handleChange({ target: { name: 'events', value: [] } });
                    }
                  }}
                />
              }
              label="None"
            />
          </Box>
          {fieldErrors.events && (
            <Typography color="error" sx={{ mt: -1, textAlign: 'left', fontFamily: 'EB Garamond' }}>
              Please select the event(s) you plan to attend
            </Typography>
          )}
        </FormControl>
        {showChildFree && !form.events.includes('None') && (
          <FormControl component="fieldset" sx={{ mb: 2 }} required error={!!fieldErrors.childFreeAck}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ color: '#F77F9F', '&.Mui-checked': { color: '#F77F9F' } }}
                  checked={form.childFreeAck}
                  onChange={(e) => {
                    handleChange({ target: { name: 'childFreeAck', value: e.target.checked } });
                  }}
                />
              }
              label="All events in Zanzibar, Tanzania will be adult-only. Please acknowledge you're ready to party child-free!"
              sx={{ fontFamily: 'EB Garamond' }}
            />
            {fieldErrors.childFreeAck && (
              <Typography color="error" sx={{ mt: -1, textAlign: 'left', fontFamily: 'EB Garamond' }}>
                Please acknowledge the child-free policy to continue
              </Typography>
            )}
          </FormControl>
        )}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel sx={{ fontFamily: 'EB Garamond' }} >Any dietary restrictions?</FormLabel>
          <TextField
            name="dietary"
            value={form.dietary}
            placeholder='e.g. vegetarian, gluten-free, etc.'
            onChange={handleChange}
            fullWidth
            sx={{ '& .MuiInputBase-input': { fontFamily: 'EB Garamond' } }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }} error={false}>
          <FormLabel sx={{ fontFamily: 'EB Garamond' }} >Would you like to send a note to the bride and groom?</FormLabel>
          <TextField
            name="note"
            value={form.note}
            onChange={handleChange}
            fullWidth
            sx={{ '& .MuiInputBase-input': { fontFamily: 'EB Garamond' } }}
          />
        </FormControl>
      </Stack>
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#2C3607',
          color: 'white',
          fontFamily: 'Sekasfont-Regular',
          fontSize:'1.2em',
          mt: 2,
          width: '100%',
          '&:hover': { backgroundColor: '#545c35' }
        }}>
        Submit
      </Button>
    </Box>
  );
}
