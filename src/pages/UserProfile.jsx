import React from 'react'
import useGetUser from '../features/user/hooks/useGetUser'
import { Box, Button, Stack, InputLabel, Card, Container, CardContent, Typography, CardHeader, CircularProgress, CardActionArea } from '@mui/material';
import _ from 'lodash';
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router';
import TableGrid from '../components/TableGrid';

const columns = [
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


const UserProfilePage = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { 
        user, 
        queryResult: { loading, error }
    } = useGetUser(id)

    if(error) {
        console.log('Error: ', error.message)
        return
    }

    if(loading){
        return (
            <Stack alignItems='center'>
                <CircularProgress size={20}/>
            </Stack>
        )
    }

    const data = [
        {
            label: 'ID',
            field: user._id,
        },
        {
            label: 'Email',
            field: user.email,
        },
        {
            label: 'Role',
            field: user.role,
        },
    ]

  return (
    <Container maxWidth='sm'>
        <Card>
            <CardHeader 
                title={`${user?.firstName} ${user?.lastName}`}
            />
            <CardContent>
                <TableGrid 
                    disableHover
                    columns={columns}
                    data={data}
                />
            </CardContent>
            <CardActionArea 
                disableRipple
                onClick={() => navigate(`/users/update/${id}`)}
            >
                Update User
            </CardActionArea>
        </Card>
    </Container>
  )
}

export default UserProfilePage