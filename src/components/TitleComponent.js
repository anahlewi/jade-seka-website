import React from 'react';
import { Typography } from '@mui/material';

function TitleComponent({ width }) {
  const mainTitleCss = width > 600
    ? { fontFamily: 'sekasfont-regular', fontSize: 80, color: '#4C815E', letterSpacing: -4.5 }
    : { fontFamily: 'sekasfont-regular', fontSize: 60, color: '#4C815E', letterSpacing: -4.5 };
  const mainHeadingCss = width > 600
    ? { fontFamily: 'Reey', fontSize: 30, color: '#F77F9F', letterSpacing: -1.5 }
    : { fontFamily: 'Reey', fontSize: '24px', color: '#F77F9F', letterSpacing: -1.5 };
  return (
    <>
      <Typography alignContent='center' sx={mainTitleCss}>
        Jade <span className="ampersand-main-title" style={{ color: '#F77F9F' }}>&</span> Seka
      </Typography>
      <Typography alignContent='center' mt={width > 600 ? -5 : -2.5} mb={width > 600 ? 2 : 1.5} sx={mainHeadingCss}>
        are getting married
      </Typography>
    </>
  );
}

export default TitleComponent;
