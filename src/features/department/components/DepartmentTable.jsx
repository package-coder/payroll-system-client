import { NetworkStatus } from '@apollo/client'
import { Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import TableContainer from '../../../components/TableContainer'
import useGetDepartments from '../hooks/useGetDepartments'
import DepartmentGrid from './DepartmentGrid'
import DepartmentModal from './DepartmentModal'

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

const DepartmentTable = () => {
    const {
        departments,
        queryResult: {
            loading,
            error,
            refetch,
            networkStatus
        }
    } = useGetDepartments()

  return (
    <TableContainer
        error={error?.message}
        loading={loading || networkStatus == NetworkStatus.refetch}
        empty={departments && departments.length == 0}
        onReload={() => refetch()}
        actions={<DepartmentModal />}
    >
        <DepartmentGrid departments={departments} />
    </TableContainer>
  )
}

export default DepartmentTable