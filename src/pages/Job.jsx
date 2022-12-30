import { Container } from '@mui/material'
import React from 'react'
import { useOutlet } from 'react-router'
import JobTable from '../features/job/components/JobTable'

const JobPage = () => {

  const outlet = useOutlet()

  if(outlet) return outlet

  return (
    <Container maxWidth='md'>
      <JobTable />
    </Container>
  )
}

export default JobPage