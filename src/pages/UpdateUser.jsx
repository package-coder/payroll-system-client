import { Box, Card, CardActionArea, CardContent, CardHeader, Container, Grid } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import UpdateUserCard from '../features/user/components/UpdateUserCard'
import { useNavigate, useParams } from 'react-router'
import useGetUser from '../features/user/hooks/useGetUser'

const UpdateUserPage = () => {
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
            <Grid container direction='column' spacing={4}>
                <Grid item>
                    <Card>
                        <Grid 
                            container 
                            direction='column'
                        >
                            <Grid item xs>
                                <CardHeader title='Profile Photo' />
                            </Grid> 
                            <Grid item sx={{ alignSelf: 'center' }}>
                            <CardContent>
                                <Box 
                                    sx={{ 
                                        height: 130,
                                        width: 130,
                                        borderRadius: '50%',
                                        backgroundColor: 'grey.100'
                                    }}
                                />
                            </CardContent>
                            </Grid>
                        </Grid>
                        <CardActionArea>
                            Change Photo
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <UpdateUserCard onSubmit={handleSubmit} user={user}/>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader title='Authentication' />
                        <CardActionArea 
                            onClick={() => navigate(`/users/password/update/${id}`)}
                        >
                            Change Password
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    </Container>
  )
}

export default UpdateUserPage