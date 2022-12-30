import { NetworkStatus } from '@apollo/client'
import { Button, IconButton, Stack, Switch, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { useNavigate } from 'react-router'
import TableContainer from '../../../components/TableContainer'
import TableGrid from '../../../components/TableGrid'
import useGetPositions from '../hooks/useGetPositions'
import PositionModal from './PositionModal'

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

const PositionTable = () => {

    const navigate = useNavigate()
    const { 
        positions, 
        queryResult: {
          loading,
          error,
          refetch,
          networkStatus
        }
    } = useGetPositions()

  return (
    <TableContainer
      disablePaginate
      disableFilter
      error={error?.message}
      loading={loading || networkStatus == NetworkStatus.refetch}
      onReload={() => refetch()}
      empty={positions && positions.length == 0}
      actions={<PositionModal />}
    >
      <TableGrid
        disableHeader
        data={positions}
        columns={columns}
      />
    </TableContainer>
  )
}

export default PositionTable