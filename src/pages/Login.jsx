import { Typography, FormControl, InputLabel, TextField, Box, Stack, Button, Avatar } from '@mui/material'
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import React from 'react'


const textFieldStyle = {
    backgroundColor: '#212426',
    color: 'inherit'
}

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
            variant='h4' 
            fontWeight='bold'
            sx={{
                mb: 3
            }}
        >
                Sign In
        </Typography>
        <form>
            <Stack direction='column' spacing={1} sx={{ width: '100%' }}>
                <TextField 
                    fullWidth
                    size="small" 
                    placeholder='Enter email address'
                    InputProps={{
                        style: textFieldStyle
                    }}
                />
                <TextField 
                    fullWidth
                    size="small" 
                    type="password"
                    autoComplete="current-password"
                    placeholder='Enter password'                        
                    InputProps={{
                        style: textFieldStyle
                    }}
                />
            </Stack>
            <Button 
                variant='contained' 
                type='submit' 
                fullWidth
                sx={{
                    mt: 3,
                    py: 1,
                    fontWeight: 'medium'
                }}
            >
                Sign In
            </Button>
        </form>
    </Box>
  )
}

export default LoginPage