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
        textAlign='center'
        sx={{ mb: 2 }}
      >
        Request an account
      </Typography>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage