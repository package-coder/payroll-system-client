import { Box, Button, Stack, InputLabel, Card, Container, CardContent, Typography, CardHeader, CircularProgress } from '@mui/material';
import React from 'react'
import _ from 'lodash';
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useParams } from 'react-router';
import TableGrid from '../components/TableGrid';
import useGetJob from '../features/job/hooks/useGetJob';


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


const getJobByColumn = (job, columns = []) => {
    if(!job) return []

    return Object.entries(job)
        .filter(entries => columns.includes(entries[0]))
        .map(entries => (
            {
                label: _.startCase(entries[0]),
                field: entries[1]
            }
        ))
}

const JobItemPage = () => {

    const { id } = useParams()
    const { job, queryResult: { loading } } = useGetJob(id)

    if(loading){
        return (
            <Stack alignItems='center'>
                <CircularProgress size={20}/>
            </Stack>
        )
    }

    const columns = ['salary', 'department', 'employmentType', 'position']
    const jobByColumn = getJobByColumn(job, columns)

  return (
    <Container maxWidth='sm'>
        <Card>
            <CardHeader 
                title={
                    <>
                        <span>{job.name}</span>
                        <Typography color='grey.400'>{job.alias}</Typography>
                    </>
                }
                action={
                    <Button>edit</Button>
                } 
            />
            <CardContent>
                <TableGrid 
                    disableHover
                    columns={rows}
                    data={jobByColumn}
                />
            </CardContent>
        </Card>
    </Container>
  )
}

export default JobItemPage