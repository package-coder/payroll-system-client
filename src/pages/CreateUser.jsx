import { Button, Card, CardContent, CardHeader, Container, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import JobForm from '../features/job/components/JobForm'
import { useNavigate } from 'react-router';
import UserForm from '../features/user/components/UserForm';

const CreateUserPage = () => {

   const navigate = useNavigate()

  return (
    <Container maxWidth='sm'>
      <UserForm onSubmit={() => navigate(-1)}/>
    </Container>
  )
}

export default CreateUserPage