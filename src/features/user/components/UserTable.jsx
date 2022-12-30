import React from "react";
import { Avatar, Chip, Stack, Switch, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableContainer from "../../../components/TableContainer";
import useGetUsers from "../hooks/useGetUsers";
import _ from "lodash";
import { Box } from "@mui/system";
import TableGrid from "../../../components/TableGrid";
import { NetworkStatus } from "@apollo/client";
import UserModal from "./UserModal";

const columns = [
  {
    id: "name",
    label: "Users",
    render: (value, row) => {
      return (
        <div>
          <Stack direction="row" spacing={2} alignItems="center">
            <Switch defaultChecked={true} size="small" />
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
  // {
  //   id: 'role',
  //   label: 'Role',
  //   align: 'center',
  //   render: (value) => (<Chip variant="small" label={value}/>)
  // },
  {
    id: "email",
    label: "Email",
    align: "right",
  },
];

const UserTable = (props) => {
  const { action, actionOnClick } = props;
  const {
    users,
    queryResult: { loading, error, refetch, networkStatus },
  } = useGetUsers();

  return (
    <TableContainer
      loading={loading || NetworkStatus.refetch == networkStatus}
      actions={<UserModal />}
      empty={users && users.length == 0}
      onReload={() => refetch()}
      error={error?.message}
    >
      <TableGrid
        data={users}
        columns={columns}
      />
    </TableContainer>
  )
};

export default UserTable;
