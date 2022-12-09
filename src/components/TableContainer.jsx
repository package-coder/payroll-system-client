import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FilterIcon from "@mui/icons-material/FilterList";
import RefreshIcon from "@mui/icons-material/Refresh";
import Card from "@mui/material/Card";
import Pagination from "@mui/material/Pagination";
import MuiTableContainer from "@mui/material/TableContainer";
import CircularProgress from "@mui/material/CircularProgress";

const TableContainer = (props) => {
  const { actions, empty, children, loading } = props;

  return (
    <Grid container direction="column" gap={3} alignItems="stretch">
      <Grid item xs>
        <Card
          elevation={0}
          sx={{
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <MuiAppBar
            position="static"
            color="secondary"
            elevation={0}
            sx={{
              borderBottomWidth: 1,
              borderBottomColor: "divider",
              borderBottomStyle: "solid",
              bgcolor: "transparent",
            }}
          >
            <Toolbar>
              <Grid container gap={2} alignItems="center">
                <Grid item>
                  <Tooltip title="Filter">
                    <IconButton>
                      <FilterIcon color="inherit" sx={{ display: "block" }} />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    placeholder="Search by email address, phone number, or user UID"
                    InputProps={{
                      disableUnderline: true,
                      sx: { fontSize: "default" },
                    }}
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  {actions}
                  <Tooltip title="Reload">
                    {loading ? (
                      <CircularProgress />
                    ) : (
                      <IconButton>
                        <RefreshIcon
                          color="inherit"
                          sx={{ display: "block" }}
                        />
                      </IconButton>
                    )}
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
          </MuiAppBar>
          {(empty || loading) && (
            <Typography sx={{ my: 5 }} color="text.secondary" align="center">
              No data for this module yet
            </Typography>
          )}
          {!(empty && loading) && (
            <MuiTableContainer>{children}</MuiTableContainer>
          )}
        </Card>
      </Grid>
      <Grid item xs sx={{ alignSelf: "center" }}>
        <Pagination count={10} color="primary" disabled={empty} />
      </Grid>
    </Grid>
  );
};

export default TableContainer;
