import { Container } from '@mui/material'
import React from 'react'
import DepartmentTable from '../features/department/components/DepartmentTable'

const DepartmentPage = () => {
  return (
    <Container maxWidth='md'>
      <DepartmentTable />
    </Container>
  )
}

export default DepartmentPage