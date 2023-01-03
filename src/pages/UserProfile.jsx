import React from 'react'
import useGetUser from '../features/user/hooks/useGetUser'
import { Box, Button, Stack, InputLabel, Card, Container, CardContent, Typography, CardHeader, CircularProgress } from '@mui/material';
import _ from 'lodash';
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useParams } from 'react-router';
import TableGrid from '../components/TableGrid';

const rows = [
    { 
        id: 'label',
        render: (value) => (
            <Typography>{value}</Typography>
        ) 
    },
    { 
        id: 'field',
        align: 'right',
        render: (value) => (
            <Typography sx={{ color: 'grey' }}>{value}</Typography>
        ) 
    }
]

const getUserByColumn = (user, columns = []) => {
    if(!user) return []

    return Object.entries(user)
        .filter(entries => columns.includes(entries[0]))
        .map(entries => (
            {
                label: _.startCase(entries[0]),
                field: entries[1]
            }
        ))
}

const UserProfilePage = () => {

    const { id } = useParams()
    const { user, queryResult: { loading } } = useGetUser(id)

    if(loading){
        return (
            <Stack alignItems='center'>
                <CircularProgress size={20}/>
            </Stack>
        )
    }

    const columns = ['firstName', 'lastName', 'email', 'role']
    const userByColumn = getUserByColumn(user, columns)

  return (
    <Container maxWidth='sm'>
        <Card>
            <CardHeader 
                title={`${user?.firstName} ${user?.lastName}`}
                action={
                    <Button>edit</Button>
                } 
            />
            <CardContent>
                <TableGrid 
                    disableHover
                    columns={rows}
                    data={userByColumn}
                />
            </CardContent>
        </Card>
    </Container>
  )
}

export default UserProfilePage