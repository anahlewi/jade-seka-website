import React from 'react';
import { Typography } from '@mui/material';

function SignatureComponent({ width }) {
  const mainTitleCss = width > 600
    ? { fontFamily: 'sekasfont-regular', fontSize: 80, color: '#4C815E' }
    : { fontFamily: 'sekasfont-regular', fontSize: 50, color: '#4C815E' };
  return (
      <Typography alignContent='center' sx={mainTitleCss}>
        Jade <span className="ampersand-main-title" style={{ color: '#F77F9F' }}>&</span> Seka
      </Typography>
  );
}

export default SignatureComponent;