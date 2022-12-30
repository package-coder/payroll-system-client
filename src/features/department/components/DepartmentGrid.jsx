import React from 'react'
import { Stack, Switch, Typography } from '@mui/material'
import TableGrid from '../../../components/TableGrid'

const columns = [
    {
      id: "",
      label: "Name",
      render: (value, row) => (
        <Stack direction='row' spacing={2}>
            <Switch defaultChecked={true} size="small" />
            <Typography>{row?.name}</Typography>
        </Stack>
      )
    },
    {

        id: "alias",
        align: 'right',
        render: (value) => (
            <Typography color='grey'>
                {value}
            </Typography>
        )
    },
];

const DepartmentGrid = (props) => {
    const { departments } = props

  return (
    <TableGrid
        data={departments}
        columns={columns}
    />
  )
}

export default DepartmentGrid