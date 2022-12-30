import { Card, Container } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'
import TableGrid from '../components/TableGrid'
import { useNavigate } from 'react-router';

 const columns = [
    { 
        id: 'title'
    },
    { 
        align: 'right',
        render: () => <ArrowForwardIosIcon sx={{ fontSize: 14 }}/>
    }
]

const data = [
    { path: '/positions', title: 'Positions' },
    { path: '/employment-types', title: 'Employment Types' }
]

const JobSettingPage = () => {

    const nagivate = useNavigate()
    const onRowClick = (row) => nagivate(row.path)

  return (
    <Container maxWidth='sm'>
        <Card>
            <TableGrid 
                disableHeader
                columns={columns}
                data={data} 
                onRowClick={onRowClick}
            />
        </Card>
    </Container>
  )
}

export default JobSettingPage