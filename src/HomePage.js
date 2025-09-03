import React, { useState, useEffect } from 'react';
import { Grid, useMediaQuery, Typography, Button, Badge, Tooltip, Box, Icon, IconButton, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ModalComponent from './components/ModalComponent';
import './App.css';
import { homePageImageMetaData } from './assets/images/homePageImageMeta';
import TitleComponent from './components/TitleComponent';
import MenuIcon from '@mui/icons-material/Menu';
import useWindowSize from './hooks/useWindowSize';
import DrawerComponent from './components/DrawerComponent';
import RSVPForm from './components/RSVPForm';


const StyledBadge = styled(Badge)`
     & .MuiBadge-badge {
       background-color: #2C3607;
       color: white;
       font-family: 'Sekasfont-Regular';
       font-size: 1em;
     }
   `;

function HomePage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { width } = useWindowSize();
  const isTablet = useMediaQuery('(max-width:900px)');
  const isMobile = useMediaQuery('(max-width:500px)');
  
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

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
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
      .map((img) => {
        const commonProps = {
          key: img.name,
          alt: img.alt,
        };
        if (img.motion) {
          return (
            <Grid item marginBottom={isMobile ? 1 : 4} marginRight={isMobile ? 1 : 6} marginLeft={isMobile ? 1 : 6} key={img.name}>
              <Tooltip marginRight={1} title={img.name} placement='top'>
                <motion.img
                  src={isMobile? img.mobileSrc: img.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={img.onClick? img.onClick : () => openModal(img)}
                  onTouchStart={img.onClick? img.onClick : () => openModal(img)}
                  className={isMobile? 'none' : 'image-context'}
                  alt={img.alt || ''}
                  transition={{ duration: img.transitionDuration || 2 }}
                  {...commonProps}
                />
              </Tooltip>
              <Typography sx={{ fontFamily: 'Sekasfont-Regular', textAlign: 'center', marginTop: 1 }} variant="body2">
                {img.name}
              </Typography>
            </Grid>
          );
        }
        return (
          <Grid item marginBottom={isMobile ? 1 : 4} marginRight={isMobile ? 1 : 6} marginLeft={isMobile ? 1 : 6} key={img.name}>
            <Tooltip title={img.name} placement='top'>
              <img 
                src={isMobile? img.mobileSrc: img.src}
                onTouchStart={img.onClick? img.onClick : () => openModal(img)}
                onClick={img.onClick? img.onClick : () => openModal(img)}
                width={isMobile && img.key === 1? '150' : ''}
                height={isMobile && img.key === 1? '150' : ''}
                className={isMobile? 'none' : 'image-context'}
                alt={img.alt || ''} 
                {...commonProps} />
            </Tooltip>
            <Typography sx={{ fontFamily: 'Sekasfont-Regular', textAlign: 'center', marginTop: 1 }} variant="body2">
              {img.name}
            </Typography>
          </Grid>
        );
      });

  return (
    <div>
      <Box sx={{ position: 'relative', width: '100%', minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2 }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Box justifyItems="center" alignItems="center" sx={{ textAlign: 'center', width: '100%' }}>
          <TitleComponent width={width} />
        </Box>
      </Box>
      <Grid container direction="column" justifyContent="center" marginTop={6} marginBottom={10} alignItems="center">
        {/* Top images row */}
        <Grid container direction="row" justifyContent="center" spacing={1}>
          {webResponsiveDisplayGridTop()}
        </Grid>

        {/* Middle images row - only for tablet */}
        {isTablet && (
          <Grid container direction="row" justifyContent="center" spacing={1} marginTop={1}>
            {webResponsiveDisplayGridMiddle()}
          </Grid>
        )}

        {/* Bottom images row */}
        <Grid container direction="row" justifyContent="center" marginTop={-1} spacing={1}>
          {webResponsiveDisplayGridBottom()}
        </Grid>

        {/* Footer */}
        <Button
          justifyContent="center"
          onClick={openModal}
          marginTop={isMobile ? 4 : 6}
          sx={{
            fontFamily: 'Sekasfont-Regular',
            fontSize: 18,
            backgroundColor: '#2C3607',
            color: 'white',
            width: 350,
            height: 35,
            borderRadius: 2,
          }}
        >
          RSVP
        </Button>
      </Grid>

      <DrawerComponent 
        open={drawerOpen} 
        onClose={handleDrawerClose} 
        navItems={homePageImageMetaData}
        onItemClick={openModal}
      />
      {isModalOpen && (
        <ModalComponent open={isModalOpen} onClose={closeModal}>
          <Typography sx={{ fontFamily: 'Sekasfont-Regular'}} fontSize={isMobile? '1.6em': 'auto'} variant="h2" marginTop={4} marginBottom={5} gutterBottom>
            {selectedImage?.modalContent?.title || ''}
          </Typography>
          <Box marginTop={4} marginBottom={2}>
            {selectedImage?.modalContent?.description || <RSVPForm onSubmit={closeModal}/>}
          </Box>
        </ModalComponent>
      )}
    </div>
  );
}

export default HomePage;
