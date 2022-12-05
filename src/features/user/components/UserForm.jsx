import { Typography, TextField, FormControl, InputLabel, Stack, Button } from '@mui/material'
import RoleField from '../../role/components/RoleField'
import React from 'react'

const UserForm = (props) => {
    const { onSubmit, onCancel } = props

    const handleSubmit = () => {
        onSubmit && onSubmit()
    }
    return (
        <form onSubmit={handleSubmit}>
            <Typography 
                variant='h6' 
                fontWeight="fontWeightBold"
                sx={{ mb: 2 }}
            >
                Add User Manually
            </Typography>
            <Stack spacing={2} alignItems="start">
                <Stack direction='row' spacing={2}>
                    <FormControl fullWidth variant='standard'>
                        <InputLabel shrink htmlFor="firstname-input">
                            First name
                        </InputLabel>
                        <TextField size="small" id="firstname-input" sx={{ mt: 2 }}/>
                    </FormControl>
                    <FormControl fullWidth variant='standard'>
                        <InputLabel shrink htmlFor="lastname-input">
                            Last name
                        </InputLabel>
                        <TextField size="small" id="lastname-input" sx={{ mt: 2 }}/>
                    </FormControl>
                </Stack>
                <FormControl fullWidth variant='standard'>
                    <InputLabel shrink htmlFor="email-input">
                        Email
                    </InputLabel>
                    <TextField size="small" id="email-input" sx={{ mt: 2 }}/>
                </FormControl>
                <RoleField />
            </Stack>
            <Stack 
                direction='row' 
                alignItems='center'
                justifyContent='center'
                spacing={2}
                sx={{
                    minWidth: '100%',
                    mt: 4
                }}
            >
                <Button variant='contained' color='secondary' fullWidth onClick={onCancel && onCancel}>Cancel</Button>
                <Button variant='contained' fullWidth type="submit">Create User</Button>
            </Stack>
        </form>
    )
}

export default React.memo(UserForm)