import { NetworkStatus } from '@apollo/client'
import { IconButton, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import TableContainer from '../../../components/TableContainer'
import TableGrid from '../../../components/TableGrid'
import PositionModal from './PositionModal'
import useGetEmploymentTypes from '../hooks/useGetEmploymentTypes';
import EmploymentTypeModal from './EmploymentTypeModal';
import EmploymentTypeSwitch from './EmploymentTypeSwitch';

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
    id: 'action',
    padding: 'checkbox',
    align: 'center',
  }
];

const addActionColumnInEmploymentTypes = (employmentTypes) => {
  if(!employmentTypes) return []

  return employmentTypes.map(employmentType => ({
    ...employmentType,
    action: <EmploymentTypeSwitch id={employmentType._id} value={employmentType.enabled} />
  }))
}

const EmploymentTypeTable = () => {

    const { 
        employmentTypes, 
        queryResult: {
          loading,
          error,
          refetch,
        }
    } = useGetEmploymentTypes()

    const employmentTypesWithActionColumn = addActionColumnInEmploymentTypes(employmentTypes)

  return (
    <TableContainer
      disablePaginate
      disableFilter
      error={error?.message}
      loading={loading}
      onReload={() => refetch()}
      empty={employmentTypes && employmentTypes.length == 0}
      actions={<EmploymentTypeModal />}
    >
      <TableGrid
        disableHeader
        data={employmentTypesWithActionColumn}
        columns={columns}
      />
    </TableContainer>
  )
}

export default EmploymentTypeTable