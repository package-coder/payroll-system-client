import React from 'react'

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import UserForm from "../features/user/components/UserForm";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";
import UserTable from "../features/user/components/UserTable";

const UserPage = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
          <UserTable action={modal} actionOnClick={toggleModal} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserPage