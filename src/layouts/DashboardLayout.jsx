import React from 'react'
import { Outlet } from 'react-router-dom';

import ThemeProvider, { theme } from '../theme'
import navigations from '../config/navigations';
import Navigator from './nav';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';


const drawerWidth = 256;

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isMdUp ? null : (
            <Navigator
              navConfig={navigations}
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            navConfig={navigations}
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Outlet />        
      </Box>
    </ThemeProvider>
  )
}

export default DashboardLayout