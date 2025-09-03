import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

function DrawerComponent({ open, onClose, navItems, onItemClick }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', backgroundColor:'#FDEDF0'} }}>
        <Typography variant="h3" sx={{ padding: 2,   fontFamily: "EB Garamond"}}>
          Menu
        </Typography>
      <List sx={{ width: 250 }}>
        {navItems.map((item, idx) => (
          <ListItem key={item.key || idx} disablePadding>
            <ListItemButton onClick={() => onItemClick && onItemClick(item)}>
              <ListItemText
                primary={<span style={{ fontFamily: 'Tenor Sans' }}>{item.name}</span>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComponent;
