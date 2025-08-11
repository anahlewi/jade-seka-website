
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

function DrawerComponent({ open, onClose, navItems, onItemClick }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
        <Typography variant="h3" sx={{ padding: 2,   fontFamily: "EB Garamond"}}>
          Menu c
        </Typography>
      <List sx={{ width: 250 }}>
        {navItems.map((item, idx) => (
          <ListItem key={item.key || idx} disablePadding>
            <ListItemButton onClick={() => onItemClick && onItemClick(item)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComponent;
