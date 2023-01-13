import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router'
import TableContainer from "../../../components/TableContainer";
import useGetUsers from "../hooks/useGetUsers";
import _ from "lodash";
import TableGrid from "../../../components/TableGrid";
import { NetworkStatus } from "@apollo/client";
import UserSwitch from "./UserSwitch";
import SplitButton from "../../../components/SplitButton";

const columns = [
  {
      id: 'action',
      padding: 'checkbox',
      align: 'center',
      label: 'Name',
  },
  {
    id: "name",
    render: (value, row) => {
      return (
        <div>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
                sx={{
                  border: 1,
                  backgroundColor: "transparent",
                  borderColor: "grey.500",
                  color: "grey.500",
                  fontSize: 13,
                }}
              >
                {_.startCase(row?.firstName)[0]}
              </Avatar>
              <Typography>{_.startCase(`${row?.firstName} ${row?.lastName}`)}</Typography>
              {/* <Box sx={{ color: "grey.500", fontSize: 12 }}>#{row?.role}</Box> */}
          </Stack>
        </div>
      );
    },
  },

  {
    id: "email",
    label: "Email",
    align: 'right',
    render: (value) =>  <Typography>{value}</Typography>
  },
];

const addActionColumnInUser = (users) => {
  if(!users) return []

  return users.map(user => ({
    ...user,
    action: <UserSwitch id={user._id} value={user.enabled} />
  }))
}

const UserTable = () => {

  const navigate = useNavigate()
  const {
    users,
    queryResult: { loading, error, refetch, networkStatus },
  } = useGetUsers();

  const usersWithActionColumn = addActionColumnInUser(users)

  const handleSearchChange = (value) => {
    refetch({
      queryOption: {
        search: value
      }
    })
  }

  return (
    <TableContainer
      loading={loading || NetworkStatus.refetch == networkStatus}
      actions={
        <>
          <Button 
            variant="contained" 
            sx={{ mr: 1 }}
            onClick={() => navigate('/users/create')}
          >
            Add user
          </Button>
        </>
      }
      empty={users && users.length == 0}
      onReload={() => refetch()}
      placeholder='Search by email, first, and last name'
      onSearchChange={handleSearchChange}
      error={error?.message}
    >
      <TableGrid
        data={usersWithActionColumn}
        columns={columns}
        onRowClick={(row) => navigate(`/users/${row._id}`)}
      />
    </TableContainer>
  )
};

export default UserTable;
