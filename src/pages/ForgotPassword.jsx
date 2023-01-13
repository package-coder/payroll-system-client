import { Typography, FormControl, InputLabel, TextField, Box, Stack, Button, Avatar } from '@mui/material'
import React from 'react'
import ForgotPasswordForm from '../features/auth/components/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign='center'
        sx={{ mb: 2 }}
      >
        Forgot password
      </Typography>
      <ForgotPasswordForm />
    </Box>
  );
};

export default ForgotPasswordPage