import PropTypes from "prop-types";
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
import { CardHeader } from "@mui/material";

const TableContainer = (props) => {
  const { 
    title,
    actions, 
    empty, 
    children, 
    loading, 
    onReload, 
    error,
    disableFilter,
    disablePaginate
  } = props;

  return (
    <Grid container direction="column" gap={3} alignItems="stretch">
      <Grid item xs>
        <Card
          elevation={0}
          sx={{
            border: 1,
            borderColor: "grey.300",
            margin: "auto",
            overflow: "hidden",
          }}
        >
          {title && (<CardHeader title={title}/>)}
          <MuiAppBar
            position="static"
            color="secondary"
            elevation={0}
            sx={{
              py: "5px",
              px: "10px",
              borderBottomWidth: 1,
              borderBottomColor: "grey.200",
              borderBottomStyle: "solid",
              bgcolor: "transparent",
            }}
          >
            <Grid container gap={2} alignItems="center">
              {
                !disableFilter && (
                  <Grid item>
                    <Tooltip title="Filter">
                      <IconButton>
                        <FilterIcon color="inherit" sx={{ display: "block" }} />
                      </IconButton>
                    </Tooltip>
                </Grid>
                )
              }
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by name, email address, or user ID"
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "default" },
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item alignSelf="center">
                {actions}
                <Tooltip title="Reload">
                  <IconButton onClick={onReload}>
                    {loading ? (
                      <CircularProgress size={20} />
                    ) : (
                      <RefreshIcon color="inherit" sx={{ display: "block" }} />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </MuiAppBar>
          {error ? (
            <Typography sx={{ my: 5 }} color="text.secondary" align="center">
              {error}
            </Typography>
          ) :
            empty || loading ? (
            <Typography sx={{ my: 5 }} color="text.primary" align="center">
              No data for this module yet
            </Typography>
          ) : (
            <MuiTableContainer>{children}</MuiTableContainer>
          )}
        </Card>
      </Grid>
      {
        !disablePaginate && (
          <Grid item xs sx={{ alignSelf: "center" }}>
            <Pagination count={10} color="primary" disabled={empty || error} />
          </Grid>
        )
      }
    </Grid>
  );
};

TableContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onReload: PropTypes.func,
  actions: PropTypes.element
}

export default TableContainer;
