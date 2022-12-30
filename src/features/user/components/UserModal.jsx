import { Dialog, DialogActions, Button, DialogContent, Box, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import React from 'react'
import { useState } from 'react'
import UserForm from './UserForm'


const UserModal = () => {

    const [show, setShow] = useState(false)
    const toggleModal = () => setShow(show => !show)

    return (
        <>
            <Button variant="contained" sx={{ mr: 1 }} onClick={toggleModal}>
                Add user
            </Button>
            <Dialog 
                open={show} 
                onClose={toggleModal}
                maxWidth='xs'
                fullWidth
                sx={{
                    border: 1,
                    borderColor: 'divider'
                }}
            >
                <DialogTitle>
                    <Grid container direction='row' alignItems='center'>
                        <Grid item xs>
                            Add User 
                        </Grid>
                        <Grid item xs='auto'>
                            <IconButton 
                                onClick={toggleModal}
                                sx={{ bgcolor: 'grey.100' }}
                            >
                                <CloseIcon fontSize='small' />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <UserForm onSubmit={toggleModal}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default UserModal