import * as React from 'react';
import { NavLink } from 'react-router-dom';

import useMatchPath from '../../hooks/useMatchPath';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { Toolbar } from '@mui/material';



const item = {
  py: '3px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  py: 2,
  px: 3,
};

export default function Navigator(props) {
  const { navConfig, ...other } = props;

  const match = useMatchPath()

  return (
    <Drawer variant="permanent" {...other}>
      <Stack direction='column' justifyContent='space-between' sx={{ height: 'inherit' }} >
        <List disablePadding>
          <ListItem>
            <Toolbar sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff', '&:hover': {} }}>
              Paperbase
            </Toolbar>
          </ListItem>
          <ListItemButton sx={{ ...item, ...itemCategory }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Project Overview</ListItemText>
          </ListItemButton>
          {navConfig.map(({ id, children }) => (
              children.map(({ id: childId, icon, path }) => (
                  <ListItem 
                    disablePadding 
                    component={NavLink}
                    key={childId} 
                    to={path}
                  >
                    <ListItemButton selected={match(path)} sx={item} disableRipple>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText>{childId}</ListItemText>
                    </ListItemButton>
                  </ListItem>
              ))
          ))}
        </List>
      </Stack>
    </Drawer>
  );
}
