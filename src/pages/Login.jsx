import { Typography, FormControl, InputLabel, TextField, Box, Stack, Button, Avatar, Divider } from '@mui/material'
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import React from 'react'
import LoginForm from "../features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign='center'
        sx={{ mb: 2 }}
      >
        Sign In
      </Typography>
      <LoginForm />
      <Divider sx={{ my: 4 }}/>
      <Typography
        variant='caption'
        textAlign='center'
        sx={{ 
          mb: 2, 
          color: 'grey',
          display: 'block'
        }}
      >
        Don't have an account?
      </Typography>
      <Button 
        fullWidth 
        variant='outlined'
        sx={{ color: 'grey', borderColor: 'gray' }}
      >
        Request an account
      </Button>
    </Box>
  );
};

export default LoginPage