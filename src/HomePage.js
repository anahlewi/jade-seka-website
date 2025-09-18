import { useState, useEffect } from 'react';
import { Grid, useMediaQuery, Typography, Button, Box,} from '@mui/material';
import ModalComponent from './components/ModalComponent';
import './App.css';
import { homePageImageMetaData } from './assets/images/homePageImageMeta';
import { updateRSVPInSheetDB } from './utils/sheetDBApi';
import TitleComponent from './components/TitleComponent';
import useWindowSize from './hooks/useWindowSize';
import RSVPForm from './components/RSVPForm';


function HomePage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { width } = useWindowSize();
  const isTablet = useMediaQuery('(max-width:1200px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isWeddingGuest') !== 'true') {
      window.location.href = '/';
    }
  }, []);

  const openModal = (img) => {
    setIsModalOpen(true);
    setSelectedImage(img);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const webResponsiveDisplayGridTop = () =>{
    if (isTablet) {
      // Only show first two images for top and bottom rows in tablet view
      const topImages = homePageImageMetaData.filter(img => img.position.section === 'top' && img.position.grid.row === 1).slice(0,2);
      return (
        <Grid container direction="row" justifyContent="center" spacing={1}>
          {topImages.map(img => renderImages('top', 1).find(el => el.key === img.name))}
        </Grid>
      );
    } else {
      // Desktop: show all top row images
      return renderImages('top', 1);
    }
  }

  const webResponsiveDisplayGridMiddle = () =>{
      if (isTablet) {
      // Only show first two images for top and bottom rows in tablet view
      const firstImg = homePageImageMetaData.filter(img => img.position.section === 'top' && img.position.grid.row === 1).slice(2,3);
      const secondImg = homePageImageMetaData.filter(img => img.position.section === 'bottom' && img.position.grid.row === 2).slice(0,1);
      return (
        <Grid container direction="row" justifyContent="center" spacing={1}>
          {firstImg.map(img => renderImages('top', 1).find(el => el.key === img.name))}
          {secondImg.map(img => renderImages('bottom', 2).find(el => el.key === img.name))}
        </Grid>
      );
    } else {
      return null;
    }
  }


  const webResponsiveDisplayGridBottom = () =>{
    if (isTablet) {
      // Only show first two images for top and bottom rows in tablet view
      const bottomImages = homePageImageMetaData.filter(img => img.position.section === 'bottom' && img.position.grid.row === 2).slice(1,3);
      return (
        <Grid container direction="row" justifyContent="center" spacing={1}>
          {bottomImages.map(img => renderImages('bottom', 2).find(el => el.key === img.name))}
        </Grid>
      );
    } else {
      // Desktop: show all top row images
      return renderImages('bottom', 2);
    }
  }

  
  // Helper to render images by section and row
  const renderImages = (section, row) =>
    homePageImageMetaData
      .filter((img) => img.position.section === section && img.position.grid.row === row)
      .map((img, idx) => {
        const commonProps = {
          key: img.name,
          alt: img.alt,
        };
        return (
          <Grid item marginBottom={isMobile ? 1 : 6} marginRight={isMobile ? 1 : 6} marginLeft={isMobile ? 1 : 6} key={img.name}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                className={isMobile ? 'none' : 'image-context'}
                src={isMobile ? img.mobileSrc : img.src}
                onTouchStart={img.onClick ? img.onClick : () => openModal(img)}
                onClick={img.onClick ? img.onClick : () => openModal(img)}
                width={isMobile && img.key === 1 ? '150' : '100%'}
                height={isMobile && img.key === 1 ? '150' : 'auto'}
                style={{ display: 'block', margin: '0 auto',  marginTop: isMobile && img.key === 3 ? -60 : 0, maxHeight: 200, width: 'auto', }}
                alt={img.alt || ''}
                {...commonProps}
              />
              <Typography
                className="image-label"
                sx={{
                  fontFamily: 'Sekasfont-Regular',
                  color: '#0A180F',
                  width: '100%',
                  maxWidth: 180,
                  mx: 'auto',
                  marginTop:1,
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  textAlign: 'center',
                  marginBottom: 3,
                  fontSize: isMobile ? '1.2em' : '1.5em',
                  lineHeight: 1,
                }}
                variant="body2"
              >
                {img.name}
              </Typography>
            </Box>
          </Grid>
        );
      });

  return (
    <div>
      <Box sx={{ position: 'relative', width: '100%', minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, }}>
        <Box justifyItems="center" alignItems="center" sx={{ textAlign: 'center', width: '100%' }}>
          <TitleComponent width={width} />
        </Box>
      </Box>
      <Grid container direction="column" justifyContent="center" marginTop={2} marginBottom={10} alignItems="center">
        {/* Top images row */}
        <Grid container direction="row" justifyContent="center" >
          {webResponsiveDisplayGridTop()}
        </Grid>

        {/* Middle images row - only for tablet */}
        {isTablet && (
          <Grid container direction="row" justifyContent="center" marginTop={1}>
            {webResponsiveDisplayGridMiddle()}
          </Grid>
        )}

        {/* Bottom images row */}
        <Grid container direction="row" justifyContent="center" marginTop={-1} mb={isMobile? -3: 3}>
          {webResponsiveDisplayGridBottom()}
        </Grid>

        {/* Footer */}
        <Button
          justifyContent="center"
          onClick={openModal}
          sx={{
            fontFamily: 'Sekasfont-Regular',
            fontSize: '2em',
            backgroundColor: '#2C3607',
            color: 'white',
            width: 350,
            height: 35,
            padding:2.6,
            marginTop: isMobile ? 4 : -7,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#4C815E',}
          }}
        >
          RSVP
        </Button>
      </Grid>
      {isModalOpen && (
        <ModalComponent open={isModalOpen} onClose={closeModal}>
          <Typography sx={{ fontFamily: 'Sekasfont-Regular'}} fontSize={isMobile? '2.6em': 'auto'} variant="h2" marginTop={4} marginBottom={5} gutterBottom>
            {selectedImage?.modalContent?.title || ''}
          </Typography>
          <Box marginTop={4} marginBottom={2}>
            {selectedImage?.modalContent?.description || <RSVPForm onSubmit={updateRSVPInSheetDB}/>}
          </Box>
        </ModalComponent>
      )}
    </div>
  );
}

export default HomePage;
