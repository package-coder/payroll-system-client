import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import TextField from '../../../components/TextField'

const PasswordField = (props) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <TextField 
        {...props}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
            endAdornment: (
                <InputAdornment>
                    <IconButton
                        size='small'
                        onClick={() => setShowPassword(showPassword => !showPassword)}
                    >
                    {
                        showPassword 
                        ? <VisibilityOff sx={{ fontSize: 14 }} /> 
                        : <Visibility sx={{ fontSize: 14 }}/>
                    }
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
  )
}

export default PasswordField