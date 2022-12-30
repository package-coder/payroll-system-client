import { Container } from '@mui/material'
import React from 'react'
import EmploymentTypeTable from '../features/job/components/EmploymentTypeTable'

const EmploymentTypePage = () => {
  return (
    <Container maxWidth='md'>
        <EmploymentTypeTable />
    </Container>
  )
}

export default EmploymentTypePage