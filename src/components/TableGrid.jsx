import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Card from '@mui/material/Card';
import Pagination from '@mui/material/Pagination';

const TableGrid = (props) => {
  const { 
    actions,
    value
  } = props

  return (
    <Grid 
        container 
        direction='column' 
        spacing={3} 
        alignItems='stretch' 
    >
      <Grid item xs>
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
                          <IconButton><SearchIcon color="inherit" sx={{ display: 'block' }} /></IconButton>
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
                        {actions}
                        <Tooltip title="Reload">
                            <IconButton>
                            <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                            </IconButton>
                        </Tooltip>
                      </Grid>
                  </Grid>
                  </Toolbar>
              </MuiAppBar>
              {!value && (
                <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
                  No users for this project yet
                </Typography>
              )}
          </Card> 
      </Grid>
      <Grid item xs sx={{ alignSelf: 'center' }}>
          <Pagination count={10} color='primary' disabled={!value}/>
      </Grid>
    </Grid>
  )
}

export default TableGrid