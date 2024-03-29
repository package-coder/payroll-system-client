import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Container } from '@mui/material';
import AccountMenu from './AccountMenu';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const AppBar = (props) => {
    const { onDrawerToggle, title } = props

  return (
    <>
      <MuiAppBar position="sticky" elevation={0} >
        <Toolbar>
          <Container>
            <Grid container spacing={1} alignItems="center">
              <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs />
              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <AccountMenu />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </MuiAppBar>
      <MuiAppBar
        component="div"
        color="primary"
        position="sticky"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Container>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>  
      </MuiAppBar>
    </>
  )
}

export default AppBar