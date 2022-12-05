import { Box } from '@mui/material'
import React from 'react'

const Form = ({ children }) => {
  return (
    <Box>
        <form>
            {children}
        </form>
    </Box>
  )
}

export default Form