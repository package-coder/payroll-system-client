import { NetworkStatus } from '@apollo/client'
import { Button, Stack, Switch, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import TableGrid from '../../../components/TableGrid'
import useGetJobs from '../hooks/useGetJobs'
import UserForm from '../../user/components/UserForm'
import TableContainer from '../../../components/TableContainer';
import JobSwitch from './JobSwitch';

const columns = [
  {
      id: 'action',
      padding: 'checkbox',
      align: 'center',
      label: 'Name',
  },
  {
    id: "",
    render: (_, row) => (
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography>{row?.name}</Typography>
        <Typography color='grey.400'>{row?.alias}</Typography>
      </Stack>
    )
  },
  {
    id: 'salary',
    label: 'Salary',
    align: 'right',
    render: (value) => <Typography color='grey'>${value}</Typography>
  }
]

const addActionColumnInJobs = (jobs) => {
  if(!jobs) return []

  return jobs.map(job => ({
    ...job,
    action: <JobSwitch id={job._id} value={job.enabled} />
  }))
}

const JobTable = () => {

  const navigate = useNavigate()
  const { 
    jobs, 
    queryResult: { 
      loading,
      error,
      refetch,
      networkStatus
    } } = useGetJobs()

    const jobsWithActionColumn = addActionColumnInJobs(jobs)
  return (
    <TableContainer
      error={error?.message}
      empty={jobs && jobs.length == 0}
      loading={loading}
      onReload={() => refetch()}
      actions={
        <>
          <Button 
            variant="contained" 
            sx={{ mr: 1 }}
            onClick={() => navigate('/jobs/create')}
          >
            Add job
          </Button>
          <Tooltip title='Setting'>
            <IconButton onClick={() => navigate('/jobs/settings')}>
              <SettingsIcon sx={{ color: 'grey' }} />
            </IconButton>
          </Tooltip>
        </>
      }
    >
      <TableGrid
        data={jobsWithActionColumn}
        columns={columns}
        onRowClick={(row) => navigate(`/jobs/${row._id}`)}
      />
    </TableContainer>
  )
}

export default JobTable