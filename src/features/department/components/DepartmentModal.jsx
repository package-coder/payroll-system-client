import { Dialog, DialogActions, Button, DialogContent, DialogTitle, Grid, IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DepartmentForm from './DepartmentForm';
import { FormProvider, useForm } from 'react-hook-form';
import useCreateDepartment from '../hooks/useCreateDepartment';

const DepartmentModal = () => {
    
    const { createDepartment } = useCreateDepartment()

    const [show, setShow] = useState(false)
    const toggleModal = () => setShow(show => !show)
    
    const methods = useForm();
    const { handleSubmit, formState: { isSubmitting } } = methods;

    const handleFormSubmit = (data) => {
        createDepartment(data)
    }

    const submit = () => handleSubmit(handleFormSubmit)()

    return (
        <FormProvider {...methods}>
            <>
                <Button variant="contained" sx={{ mr: 1 }} onClick={toggleModal}>
                    Add department
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
                                Add Department 
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
                        <DepartmentForm />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            fullWidth 
                            variant="contained"
                            onClick={submit}
                            disabled={isSubmitting}
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        </FormProvider>
    )
}

export default DepartmentModal