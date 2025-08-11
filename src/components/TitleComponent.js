import React from 'react';
import { Typography } from '@mui/material';

function TitleComponent({ width }) {
  const mainTitleCss = width > 600
    ? { fontFamily: 'sekasfont-regular', fontSize: 80, color: '#4C815E' }
    : { fontFamily: 'sekasfont-regular', fontSize: 50, color: '#4C815E' };
  const mainHeadingCss = width > 600
    ? { fontFamily: 'Reey', fontSize: 30, color: '#F77F9F' }
    : { fontFamily: 'Reey', fontSize: '24px', color: '#F77F9F' };
  return (
    <>
      <Typography sx={mainTitleCss}>
        Jade <span className="ampersand-main-title" style={{ color: '#F77F9F' }}>&</span> Seka
      </Typography>
      <Typography mt={width > 600 ? -5 : -2.5} mb={width > 600 ? 2 : 1.5} sx={mainHeadingCss}>
        are getting married
      </Typography>
    </>
  );
}

export default TitleComponent;
