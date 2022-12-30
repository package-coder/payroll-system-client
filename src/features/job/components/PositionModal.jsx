import { Dialog, DialogActions, Button, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { FormProvider, useForm } from 'react-hook-form';
import React from 'react'
import { useState } from 'react'
import PositionForm from './PositionForm';
import useCreatePosition from '../hooks/useCreatePosition';

const PositionModal = () => {

    const [show, setShow] = useState(false)
    const toggleModal = () => setShow(show => !show)

  return (
        <>
            <Button variant="contained" sx={{ mr: 1 }} onClick={toggleModal}>
                Add position
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
                                Add Position
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
                        <PositionForm onSubmit={toggleModal}/>
                    </DialogContent>
            </Dialog>
        </>
  )
}

export default PositionModal