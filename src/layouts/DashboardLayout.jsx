import React, { memo } from 'react'
import { Outlet } from 'react-router-dom';

import ThemeProvider, { theme } from '../theme'
import navigations from '../config/navigations';
import Navigator from './nav';
import AppBar from './appbar';

import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Card } from '@mui/material';


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