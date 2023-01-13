import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import TextField from './TextField'

const PasswordField = (props) => {

    const { showIcon, offIcon } = props
    const [showPassword, setShowPassword] = useState(false)

  return (
    <TextField 
        {...props}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
            ...props?.InputProps,
            endAdornment: (
                <InputAdornment>
                    <IconButton
                        size='small'
                        onClick={() => setShowPassword(showPassword => !showPassword)}
                        sx={props?.iconButtonStyle}
                    >
                    {
                        showPassword 
                        ? (offIcon ? offIcon : <VisibilityOff sx={{ fontSize: 14 }} />) 
                        : (showIcon ? showIcon : <Visibility sx={{ fontSize: 14 }}/>)
                    }
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
  )
}

export default PasswordField