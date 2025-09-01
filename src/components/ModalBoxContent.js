import React from 'react';
import { Box } from '@mui/material';

export default function ModalBoxContent({ children, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundColor: 'rgba(253, 237, 240, 0.5)',
        p: 3,
        flexGrow: 1,
        fontFamily:'Tenor Sans',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
