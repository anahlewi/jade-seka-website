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
        overflowWrap: 'break-word',
        fontFamily:'Tenor Sans',
        boxShadow: '0 4px 16px 0 rgba(44, 54, 7, 0.15)',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
