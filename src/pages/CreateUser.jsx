import { Button, Card, Link } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import UserForm from '../features/user/components/UserForm'

const CreateUserPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button 
        onClick={() => navigate(-1)}
        sx={{ mb: 1, p: 0 }}
      >
        GO BACK
      </Button>
      <Card
        elevation={0}
        sx={{
          overflow: 'hidden',
          py: 3,
          px: 4,
        }}
      >
        <UserForm />
      </Card>
    </div>
  )
}

export default CreateUserPage