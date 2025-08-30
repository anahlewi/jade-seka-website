import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ModalBoxContainer({ children, title, sx = {}, ...props }) {
  // Tablet breakpoint (md = 900px)
  const isTablet = useMediaQuery('(max-width:900px)');

  if (isTablet) {
    return (
      <Accordion sx={{
        borderRadius: 1,
        backgroundColor: 'rgba(247, 127, 159, 0.5)',
        color: '#2C3607',
        boxShadow: 'none',
        mb: 2,
        ...sx,
      }} {...props}>
        <AccordionSummary sx={{fontFamily:'EB Garamond'}} expandIcon={<ExpandMoreIcon />}>
          {title}
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
        backgroundColor: 'rgba(247, 127, 159, 0.5)',
        p: 3,
        color: '#2C3607',
        mb: 2,
        flexGrow: 1,
        fontFamily:'EB Garamond',
        ...sx,
      }}
      {...props}
    >
      <strong>{title}</strong>
      {children}
    </Box>
  );
}
