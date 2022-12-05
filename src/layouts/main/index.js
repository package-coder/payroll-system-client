import React, { memo } from 'react'
import { Outlet } from 'react-router-dom';

import ThemeProvider, { theme } from '../../theme'
import navConfig from '../../config/NavConfig';
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

const MainLayout = () => {
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
              navConfig={navConfig}
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            navConfig={navConfig}
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Outlet />
         {/* <Box 
          sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: '#eaeaea'
          }}>
          <AppBar onDrawerToggle={handleDrawerToggle} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 1 }}>
            <Container maxWidth='md'>
              <Outlet />
               <Card 
                elevation={0}
                sx={{ 
                  margin: 'auto', 
                  overflow: 'hidden',
                }}
              >
                <MuiAppBar
                  position="static"
                  color="secondary"
                  elevation={0}
                  sx={{ 
                    borderBottomWidth: 1,
                    borderBottomColor: 'divider',
                    borderBottomStyle: 'solid',
                    bgcolor: 'transparent'
                  }}
                >
                  <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Tooltip title="Search">
                          <IconButton disableRipple>
                            <SearchIcon color="inherit" sx={{ display: 'block' }} />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item xs>
                        <TextField
                          fullWidth
                          placeholder="Search by email address, phone number, or user UID"
                          InputProps={{
                            disableUnderline: true,
                            sx: { fontSize: 'default' },
                          }}
                          variant="standard"
                        />
                      </Grid>
                      <Grid item>
                        <Button variant="contained" sx={{ mr: 1 }}>
                          Add user
                        </Button>
                        <Tooltip title="Reload">
                          <IconButton>
                            <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Toolbar>
                </MuiAppBar>
                <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                  No users for this project yet
                </Typography>
              </Card> 
            </Container>
          </Box>
        </Box> */}

        
      </Box>
    </ThemeProvider>
  )
}

export default memo(MainLayout)