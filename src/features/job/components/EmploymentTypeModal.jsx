import { Dialog, Button, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import { useState } from 'react'
import EmploymentTypeForm from './EmploymentTypeForm';

const EmploymentTypeModal = () => {

    const [show, setShow] = useState(false)
    const toggleModal = () => setShow(show => !show)

  return (
        <>
            <Button variant="contained" sx={{ mr: 1 }} onClick={toggleModal}>
                Add type
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
                                Add Employment Type
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
                        <EmploymentTypeForm onSubmit={toggleModal}/>
                    </DialogContent>
            </Dialog>
        </>
  )
}

export default EmploymentTypeModal