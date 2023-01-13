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
                backgroundColor: '#0e0f11',
                color: 'white'
            }}
        >
            <Container 
                maxWidth='xs'
                sx={{
                    height: '100%',
                    py: 4
                }}
            >
                <Outlet />
            </Container>
        </Box>
    </ThemeProvider>
  )
}

export default AuthLayout