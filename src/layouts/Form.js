import { Box } from '@mui/material'
import React from 'react'

const Form = ({ children }) => {
  return (
    <Box
        sx={{
            '& .MuiInputBase-input': {
                bgcolor: '#f9f9f9'
            }
        }}
    >
        <form>
            {children}
        </form>
    </Box>
  )
}

export default Form