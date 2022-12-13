import React from "react";
import { Avatar, Stack, Switch, Typography } from "@mui/material";
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

const columns = [
  {
    id: "name",
    label: "Name",
    render: (row) => {
      return (
        <div>
          <Stack direction="row" spacing={3} alignItems="center">
            <Switch defaultChecked={true} size="small" />
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{
                  border: 1,
                  backgroundColor: "transparent",
                  borderColor: "grey.400",
                  color: "grey.400",
                  fontSize: 13,
                }}
              >
                {_.startCase(row?.name)[0]}
              </Avatar>
              <span>{_.startCase(row?.name)}</span>
              <Box sx={{ color: "grey.500", fontSize: 12 }}>#{row?.role}</Box>
            </Stack>
          </Stack>
        </div>
      );
    },
  },
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
    queryResult: { loading },
  } = useGetUsers();

  return (
    <TableContainer
      empty={!users}
      loading={loading && !users}
      actions={
        !action && (
          <Button variant="contained" sx={{ mr: 1 }} onClick={actionOnClick}>
            Add user
          </Button>
        )
      }
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} align={column.align}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users
            ?.map(({ firstName, lastName, ...others }) => ({
              name: `${firstName} ${lastName}`,
              ...others,
            }))
            ?.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        padding={column.padding}
                        sx={{ width: column.width }}
                      >
                        {column?.render
                          ? column?.render(row)
                          : column?.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
