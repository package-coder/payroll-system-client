import { NetworkStatus } from '@apollo/client'
import { Stack, Switch, Typography } from '@mui/material'
import React from 'react'
import TableContainer from '../../../components/TableContainer'
import TableGrid from '../../../components/TableGrid'
import useGetDepartments from '../hooks/useGetDepartments'
import DepartmentModal from './DepartmentModal'
import DepartmentSwitch from './DepartmentSwitch'


const columns = [
    {
        id: 'action',
        padding: 'checkbox',
        align: 'center',
        label: 'Name',
    },
    {
      id: "name",
      render: (value) => (<Typography>{value}</Typography>)
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

const addActionColumnInDepartments = (departments) => {
    if(!departments) return []
  
    return departments.map(department => ({
      ...department,
      action: <DepartmentSwitch id={department._id} value={department.enabled} />
    }))
  }


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

    const departmentsWithActionColumn = addActionColumnInDepartments(departments)

  return (
    <TableContainer
        error={error?.message}
        loading={loading}
        empty={departments && departments.length == 0}
        onReload={() => refetch()}
        actions={<DepartmentModal />}
    >
        <TableGrid
            data={departmentsWithActionColumn}
            columns={columns}
        />
    </TableContainer>
  )
}

export default DepartmentTable