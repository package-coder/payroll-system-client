import { Typography, Box } from '@mui/material'
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import ForgotPasswordForm from '../features/auth/components/ForgotPasswordForm';
import VerifyEmailForm from '../features/auth/components/VerifyEmailForm';

const ForgotPasswordPage = () => {
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token')

  if(token) {
    return <Box sx={{ mt: 5 }}>
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{ mb: 5 }}
    >
      Forgot password
    </Typography>
    <ForgotPasswordForm accessToken={token} />
  </Box>
  }

  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 5 }}
      >
        Email Verification
      </Typography>
      <VerifyEmailForm />
    </Box>
  );
};

export default ForgotPasswordPage