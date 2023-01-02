import { NetworkStatus } from '@apollo/client'
import { Button, CircularProgress, IconButton, Stack, Switch, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { useNavigate } from 'react-router'
import TableContainer from '../../../components/TableContainer'
import TableGrid from '../../../components/TableGrid'
import useGetPositions from '../hooks/useGetPositions'
import PositionModal from './PositionModal'
import useEnablePosition from '../hooks/useEnablePosition';
import PositionSwitch from './PositionSwitch';


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

const addActionColumnInPositions = (positions) => {
  if(!positions) return []

  return positions.map(position => ({
    ...position,
    action: <PositionSwitch id={position._id} value={position.enabled} />
  }))
}

const PositionTable = () => {

    const { 
        positions, 
        queryResult: {
          loading: fetchingPositions,
          error,
          refetch,
          networkStatus
        }
    } = useGetPositions()

    const positionsWithActionColumn = addActionColumnInPositions(positions)

  return (
    <TableContainer
      disablePaginate
      disableFilter
      error={error?.message}
      loading={fetchingPositions}
      onReload={() => refetch()}
      empty={positions && positions.length == 0}
      actions={<PositionModal />}
    >
      <TableGrid
        disableHeader
        data={positionsWithActionColumn}
        columns={columns}
      />
    </TableContainer>
  )
}

export default PositionTable