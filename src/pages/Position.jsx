import { Container } from '@mui/material'
import React from 'react'
import PositionTable from '../features/job/components/PositionTable'

const PositionPage = () => {
  return (
    <Container maxWidth='md'>
      <PositionTable />
    </Container>
  )
}

export default PositionPage