import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import SignatureComponent from './SignatureComponent';

export default function RSVPFormSubmitMessage({ success, error, onClose }) {
  return (
    <Box sx={{ justifyItems:'center', width: '100%', mx: 'auto' }} >
      <Typography variant="h3" sx={{ fontFamily: 'Sekasfont-Regular', mb: 6, textAlign: 'center' }}> RSVP</Typography>
      {success && (
        <Stack direction={'column'} alignItems="center" sx={{ px: 2 }}>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 3 }}>Thanks for your RSVP!</Typography>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 3 }}>We’ve received your response and truly appreciate you taking the time to let us know.</Typography>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 3 }}>Whether you’ll be celebrating with us in person or sending love from afar, it means the world to have you be part of this special moment.</Typography>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 3 }}>If you need to update your RSVP, please contact us directly.</Typography>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 3 }}>With love,</Typography>
          
        </Stack>
      )}
      {error && (
        <Box>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 2 }}>Oops!</Typography>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 3 }}>Something went wrong, and we weren’t able to complete your RSVP at this time.</Typography>
          <Typography variant="body1" fontFamily="EB Garamond" sx={{ mb: 3 }}>Please try again in a few moments, or feel free to contact us directly if the issue continues — we want to make sure your response is received.</Typography>
        </Box>
      )}

      <SignatureComponent width={400} />
    </Box>
  );
}
