import { Button, Card, CardContent, CardHeader, Container, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import JobForm from '../features/job/components/JobForm'
import { useNavigate } from 'react-router';

const CreateJobPage = () => {

   const navigate = useNavigate()

  return (
    <Container maxWidth='sm'>
        <Card>
            <CardHeader 
                title='Create' 
                action={
                    <IconButton>
                        <MoreVertIcon fontSize='small'/>
                    </IconButton>
                }    
            />
            <CardContent>
                <JobForm onSubmit={() => navigate(-1)}/>
            </CardContent>
        </Card>
    </Container>
  )
}

export default CreateJobPage