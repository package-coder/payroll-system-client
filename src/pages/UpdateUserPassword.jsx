import { Container, Grid } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import useGetUser from '../features/user/hooks/useGetUser'
import UpdateUserPasswordCard from '../features/user/components/UpdateUserPasswordCard'

const UpdateUserPasswordPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { 
        user,
        queryResult: { loading }
    } = useGetUser(id)

    const methods = useForm()

    const handleSubmit = () => {
        navigate(-1)
    }

    if(loading) return

  return (
    <Container maxWidth='sm'>
        <FormProvider {...methods}>
            <Grid container direction='column' spacing={5}>
                <Grid item>
                    <UpdateUserPasswordCard onSubmit={handleSubmit} user={user}/>
                </Grid>
            </Grid>
        </FormProvider>
    </Container>
  )
}

export default UpdateUserPasswordPage