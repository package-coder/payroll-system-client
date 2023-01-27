import { Typography, FormControl, InputLabel, TextField, Box, Stack, Button, Avatar, Divider } from '@mui/material'
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import React from 'react'
import LoginForm from "../features/auth/components/LoginForm";
import { Navigate, useNavigate } from 'react-router';
import useAuth from '../features/auth/hooks/useAuth';

const LoginPage = () => {
  const navigate = useNavigate()
  /*
    ###########################################################
    TODO: [BUG-1001] - Authenticated user can navigate to login 
  */
  
  // const { user, queryResult: { loading } } = useAuth()
  
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
      <Typography
        variant='caption'
        textAlign='center'
        sx={{
          mt: 6, 
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
        sx={{ 
          color: 'grey', 
          borderColor: 'gray',
          height: '3rem'
        }}
        onClick={() => navigate('/register')}
      >
        Register an account
      </Button>
    </Box>
  );
};

export default LoginPage