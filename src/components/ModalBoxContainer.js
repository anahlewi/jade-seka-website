import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ModalBoxContainer({ children, title, sx = {}, ...props }) {
  // Tablet breakpoint (md = 900px)
  const isTablet = useMediaQuery('(max-width:1200px)');
  const isMobile = useMediaQuery('(max-width:600px)');

  if (isTablet) {
    return (
      <Accordion sx={{
        borderRadius: 1,
        backgroundColor: 'rgba(76, 129, 94, 0.5)',
        color: '#2C3607',
        boxShadow: '0 4px 16px 0 rgba(44, 54, 7, 0.15)',
        mb: 2,
        width: isMobile? '95vw': '97.5vw',
        maxWidth: isMobile? '95vw': '97.5vw',
        left: 0,
        position: 'relative',
        ...sx,
      }} {...props}>
        <AccordionSummary sx={{fontFamily:'EB Garamond'}} expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6' fontFamily="EB Garamond">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    );
  }
  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundColor: 'rgba(76, 129, 94, 0.5)',
        p: 3,
        color: '#2C3607',
        mb: 2,
        flexGrow: 1,
        fontFamily:'EB Garamond',
        boxShadow: '0 4px 16px 0 rgba(44, 54, 7, 0.15)',
        ...sx,
      }}
      {...props}
    >
      <Typography variant="h6" fontFamily="EB Garamond" gutterBottom>{title}</Typography>
      {children}
    </Box>
  );
}
