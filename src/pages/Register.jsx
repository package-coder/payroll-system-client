import { Typography, Box } from '@mui/material'
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import React from 'react'
import RegisterForm from '../features/auth/components/RegisterForm';

const RegisterPage = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 5 }}
      >
        Create Account
      </Typography>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage