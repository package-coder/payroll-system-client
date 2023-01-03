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
import { useState } from 'react';
import { useCallback } from 'react';
import useCreatePosition from '../hooks/useCreatePosition';


const columns = [
  {
    id: 'action',
    padding: 'checkbox',
    align: 'center',
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
  // {
  //   id: '',
  //   render: () => (

  //   )
  // }
];

const addActionColumnInPositions = (positions) => {
  if(!positions) return []

  return positions.map(position => ({
    ...position,
    action: <PositionSwitch id={position._id} value={position.enabled} />
  }))
}

const AddPositionButton = (props) => {
  const { value, onSubmit } = props
  const { createPosition, queryResult } = useCreatePosition()

  const onClick = async () => {
    if(!value) return

    try{
      await createPosition({
        name: value
      })
      onSubmit && onSubmit()
    }catch (e) {
      console.error(e)
    }
  }

  return (
    <Button 
      variant="contained" 
      sx={{ mr: 1 }} 
      onClick={onClick}
    >
      Add position
    </Button>
  )
}

const PositionTable = () => {

  const [inputValue, setInputValue] = useState('')

    const { 
        positions, 
        queryResult: {
          loading: fetchingPositions,
          error,
          refetch,
          networkStatus
        }
    } = useGetPositions()

    const handleSearchChange = (value) => {
      setInputValue(value)
    }

    const handleSubmit = () => {
      setInputValue('')
    }

    const positionsWithActionColumn = addActionColumnInPositions(positions)

  return (
    <TableContainer
      disablePaginate
      disableFilter
      error={error?.message}
      loading={fetchingPositions}
      placeholder='Enter position name'
      onSearchChange={handleSearchChange}
      searchValue={inputValue}
      onReload={() => refetch()}
      empty={positions && positions.length == 0}
      actions={
        <AddPositionButton 
          value={inputValue} 
          onSubmit={handleSubmit}
        />}
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