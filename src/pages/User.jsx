import React from 'react'

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from "@mui/material/Card";
import UserForm from "../features/user/components/UserForm";
import useMediaQuery from "@mui/material/useMediaQuery";
import TableContainer from "../components/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";

import useGetUsers from "../features/user/hooks/useGetUsers";
import { useTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";

const columns = [
  { id: "name", label: "Name", width: 0, padding: "none" },
  {
    id: "email",
    label: "",
    width: 0,
  },
  { id: "role", label: "Role", align: "center", width: 170 },
];

const UserPage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const {
    users,
    queryResult: { loading },
  } = useGetUsers();

  const [modal, setModal] = React.useState(false);
  const toggleModal = () => setModal((modal) => !modal);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        gap={3}
        direction={isMdUp ? "row" : "column"}
        sx={{ gridAutoFlow: "row" }}
      >
        {modal && (
          <Grid item xs={4}>
            <Card
              elevation={0}
              sx={{
                overflow: "hidden",
                p: 5,
              }}
            >
              <UserForm onSubmit={toggleModal} onCancel={toggleModal} />
            </Card>
          </Grid>
        )}
        <Grid item xs sx={{ height: "auto" }}>
          <TableContainer
            empty={!users}
            loading={loading && !users}
            actions={
              !modal && (
                <Button
                  variant="contained"
                  sx={{ mr: 1 }}
                  onClick={toggleModal}
                >
                  Add user
                </Button>
              )
            }
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox" sx={{ width: 0 }}>
                    <Switch defaultChecked={true} />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{ width: column.width }}
                      padding={column.padding}
                    >
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
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell padding="checkbox" sx={{ width: 0 }}>
                          <Switch defaultChecked={true} />
                        </TableCell>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              padding={column.padding}
                              sx={{ width: column.width }}
                            >
                              {column.format && typeof value === "number"
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPage