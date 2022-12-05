import { FormControl, Label, InputLabel, MenuItem, OutlinedInput, Select, FormLabel } from '@mui/material'
import React from 'react'

const RoleField = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }
  return (
    <FormControl fullWidth size='small' >
        <InputLabel shrink htmlFor='role-select'>
            Role
        </InputLabel>
        <Select
            id='role-select'
            value={value}
            onChange={handleChange}
            input={<OutlinedInput />}
            sx={{ 
                mt: 1
            }}
        >
            <MenuItem value='SUPER_ADMIN'>SUPER ADMIN</MenuItem>
            <MenuItem value='ADMIN'>ADMIN</MenuItem>
            <MenuItem value='user'>USER</MenuItem>
        </Select>
    </FormControl>
  )
}

export default React.memo(RoleField)