import { Box, Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import ThemeProvider from '../theme'

const AuthLayout = () => {
  return (
    <ThemeProvider>
        <Box 
            sx={{
                minHeight: '100vh',
                backgroundColor: '#1d1f22',
                color: 'white'
            }}
        >
            <Container 
                maxWidth='xs'
                sx={{
                    py: 6
                }}
            >
                <Outlet />
            </Container>
        </Box>
    </ThemeProvider>
  )
}

export default AuthLayout