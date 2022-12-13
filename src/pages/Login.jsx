import { Typography, FormControl, InputLabel, TextField, Box, Stack, Button, Avatar } from '@mui/material'
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import React from 'react'
import useLogin from '../features/auth/hooks/useLogin';
import LoginForm from "../features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <LeakAddIcon
        sx={{
          fontSize: 40,
          mb: 2,
        }}
      />
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 3,
        }}
      >
        Sign In
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default LoginPage