import React, { useState, useEffect } from 'react';
import { Grid, useMediaQuery, Typography, Button, Badge, Tooltip, Box, Icon, IconButton, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModalComponent from './components/ModalComponent';
import './App.css';
import { homePageImageMetaData } from './assets/images/homePageImageMeta';
import { updateRSVPInSheetDB } from './utils/sheetDBApi';
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      .map((img, idx) => {
        const commonProps = {
          key: img.name,
          alt: img.alt,
        };
        const handleMouseEnter = () => setHoveredIndex(`${section}-${row}-${idx}`);
        const handleMouseLeave = () => setHoveredIndex(null);
        const isHovered = hoveredIndex === `${section}-${row}-${idx}`;
        return (
          <Grid item marginBottom={isMobile ? 1 : 6} marginRight={isMobile ? 1 : 6} marginLeft={isMobile ? 1 : 6} key={img.name}>
            {!isTablet && !isMobile ? (
              <Box
                sx={{
                  position: 'relative',
                  width: isMobile && img.key === 1 ? 150 : '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: isHovered ? 1001 : 1,
                  '&:hover .image-label': {
                    opacity: 1,
                    transition: 'opacity 0.3s',
                  },
                }}
              >
                <img 
                  className={isMobile ? 'none' : 'image-context'}
                  src={isMobile ? img.mobileSrc : img.src}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={img.onClick ? img.onClick : () => openModal(img)}
                  onClick={img.onClick ? img.onClick : () => openModal(img)}
                  width={isMobile && img.key === 1 ? '150' : '100%'}
                  height={isMobile && img.key === 1 ? '150' : 'auto'}
                  style={{ zIndex: isHovered ? 1001 : 1, display: 'block'}}
                  alt={img.alt || ''}
                  {...commonProps} />
                <Typography
                  className="image-label"
                  sx={{
                    fontFamily: 'Sekasfont-Regular',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: isHovered ? 1002 : 2,
                    fontSize: 30,
                    textAlign: 'center',
                    overflowWrap: 'word-break',
                    color: 'white',
                    textShadow: '1px 1px 2px black',
                    pointerEvents: 'none',
                    width: '90%',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                  variant="body1"
                >
                  {img.name}
                </Typography>
              </Box>
            ) : (
              <>
                <img 
                  className={isMobile ? 'none' : 'image-context'}
                  src={isMobile ? img.mobileSrc : img.src}
                  onTouchStart={img.onClick ? img.onClick : () => openModal(img)}
                  onClick={img.onClick ? img.onClick : () => openModal(img)}
                  width={isMobile && img.key === 1 ? '150' : '100%'}
                  height={isMobile && img.key === 1 ? '150' : 'auto'}
                  style={{ display: 'block', marginTop: isMobile && img.key === 3 ? -73 : 0 }}
                  alt={img.alt || ''}
                  {...commonProps} />
                <Typography
                  className="image-label"
                  sx={{ fontFamily: 'Sekasfont-Regular', textAlign: 'center', marginBottom: 3, fontSize: '1em' }}
                  variant="body2"
                >
                  {img.name}
                </Typography>
              </>
            )}
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
            {selectedImage?.modalContent?.description || <RSVPForm onSubmit={updateRSVPInSheetDB}/>}
          </Box>
        </ModalComponent>
      )}
      {hoveredIndex && !isTablet && (
        <Box className="image-overlay" sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', bgcolor: 'rgba(0, 0, 0, 0.7)', zIndex: 1000, transition: 'opacity 1s', opacity: 1, pointerEvents: 'auto' }} />
      )}
    </div>
  );
}

export default HomePage;
