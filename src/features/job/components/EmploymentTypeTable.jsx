import { NetworkStatus } from '@apollo/client'
import { IconButton, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import TableContainer from '../../../components/TableContainer'
import TableGrid from '../../../components/TableGrid'
import PositionModal from './PositionModal'
import useGetEmploymentTypes from '../hooks/useGetEmploymentTypes';
import EmploymentTypeModal from './EmploymentTypeModal';

const columns = [
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
      id: '',
      padding: 'none',
      align: 'right',
      render: () => (
        <IconButton>
          <DeleteIcon fontSize='small' color='grey'/>
        </IconButton>
      )
    }
  ];

const EmploymentTypeTable = () => {

    const { 
        employmentTypes, 
        queryResult: {
          loading,
          error,
          refetch,
          networkStatus
        }
    } = useGetEmploymentTypes()

  return (
    <TableContainer
      disablePaginate
      disableFilter
      error={error?.message}
      loading={loading || networkStatus == NetworkStatus.refetch}
      onReload={() => refetch()}
      empty={employmentTypes && employmentTypes.length == 0}
      actions={<EmploymentTypeModal />}
    >
      <TableGrid
        disableHeader
        data={employmentTypes}
        columns={columns}
      />
    </TableContainer>
  )
}

export default EmploymentTypeTable