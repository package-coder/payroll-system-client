import React from 'react'
import { useNavigate } from "react-router-dom";



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
import UserModal from '../features/user/components/UserModal';
import UserDrawer from '../features/user/components/UserDrawer';


const UserPage = () => {

   const navigate = useNavigate()
  return (
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
                {/* <Button 
                    variant="contained" 
                    sx={{ mr: 1 }}
                    onClick={() => navigate('/create/user')}
                >
                    Add user as Page
                </Button> */}
                <UserModal />
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
    )
}

export default UserPage