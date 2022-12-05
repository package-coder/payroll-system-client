import { Typography, TextField, FormControl, InputLabel, Stack, Grid } from '@mui/material'
import React from 'react'
import Form from '../../../layouts/Form'

const UserForm = () => {
    return (
        <Form>
            <Typography variant='h6' sx={{ mb: 3 }} fontWeight='bold'>Add User</Typography>
            <Stack
                spacing={1}
                // sx={{ maxWidth: { lg: '70%', md: '100%' } }}
            >
                <Grid container direction='row' spacing={3}>
                    <Grid item xs>
                        <FormControl fullWidth variant='standard'>
                            <InputLabel shrink htmlFor="firstname-input">
                                First name
                            </InputLabel>
                            <TextField size="small" id="firstname-input" sx={{ mt: 2 }}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl fullWidth variant='standard'>
                            <InputLabel shrink htmlFor="firstname-input">
                                Last name
                            </InputLabel>
                            <TextField size="small" id="firstname-input" sx={{ mt: 2 }}/>
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl variant='standard'>
                    <InputLabel shrink htmlFor="firstname-input">
                        Email
                    </InputLabel>
                    <TextField size="small" id="firstname-input" sx={{ mt: 2 }}/>
                </FormControl>
                <FormControl variant='standard'>
                    <InputLabel shrink htmlFor="firstname-input">
                        Role
                    </InputLabel>
                    <TextField size="small" id="firstname-input" sx={{ mt: 2 }}/>
                </FormControl>

            </Stack>
        </Form>
    )
}

export default React.memo(UserForm)