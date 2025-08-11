
import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Badge, Tooltip, Box, Icon, IconButton, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ModalComponent from './components/ModalComponent';
import './App.css';
import { homePageImageMetaData } from './assets/images/homePageImageMeta';
import TitleComponent from './components/TitleComponent';
import MenuIcon from '@mui/icons-material/Menu';
import useWindowSize from './hooks/useWindowSize';
import DrawerComponent from './components/DrawerComponent';


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


  // Helper to render images by section and row
  const renderImages = (section, row) =>
    homePageImageMetaData
      .filter((img) => img.position.section === section && img.position.grid.row === row)
      .map
      ((img) => {
        const commonProps = {
          key: img.name,
          alt: img.alt,
          className: 'draggable image-context',
          style: { width: img.width, height: img.height },
        };
        if (img.motion) {
          return (
            <Grid item marginBottom={3} margin={1} key={img.name}>
              <StyledBadge
                badgeInset="14%"
                badgeContent={img.key}
                anchorOrigin={{ vertical:`${img.vertical}`, horizontal:`${img.horizontal}`}}
              >
                <Tooltip marginRight={1} title={img.name} placement='top'>
                  <motion.img
                    src={img.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={img.onClick? img.onClick : () => openModal(img)}
                    transition={{ duration: img.transitionDuration || 2 }}
                    {...commonProps}
                  />
                </Tooltip>
              </StyledBadge>
            </Grid>
          );
        }
        return (
          <Grid item marginBottom={3} key={img.name}>
            <StyledBadge
              badgeContent={img.key}
              color="primary"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeInset="14%"
            >
              <Tooltip title={img.name} placement='top'>
                <img src={img.src} onClick={img.onClick? img.onClick : () => openModal(img)} alt={img.alt || ''} {...commonProps} />
              </Tooltip>
            </StyledBadge>
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
        <Box justifyItems="center" alignItems="center" >
          <TitleComponent width={width} />
        </Box>
      </Box>
      <Grid container direction="column" justifyContent="center" marginTop={3} alignItems="center">
        {/* Top images row */}
        <Grid container direction="row" justifyContent="center" spacing={1}>
          {renderImages('top', 1)}
        </Grid>

        {/* middle images row */}
        <Grid container direction="column" justifyContent="center" marginTop={-1} spacing={1}>
          {/* You can add more content here if needed */}
        </Grid>

        {/* Bottom images row */}
        <Grid container direction="row" justifyContent="center" marginTop={-1} spacing={1}>
          {renderImages('middle', 2)}
          {renderImages('bottom', 3)}
        </Grid>

        {/* Footer */}
        <Button
          justifyContent="center"
          onClick={openModal}
          sx={{
            fontFamily: 'Sekasfont-Regular',
            fontSize: 18,
            backgroundColor: '#2C3607',
            color: 'white',
            width: 100,
            height: 35,
            borderRadius: 2,
            mt: -1
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
          <Typography sx={{ fontFamily: 'Sekasfont-Regular' }} variant="h2" marginTop={4} marginBottom={5} gutterBottom>
            {selectedImage?.modalContent?.title || 'Modal Title'}
          </Typography>
          <Box marginTop={4} marginBottom={2}>
            {selectedImage?.modalContent?.description || 'No description available.'}
          </Box>
        </ModalComponent>
      )}
    </div>
  );
}

export default HomePage;
