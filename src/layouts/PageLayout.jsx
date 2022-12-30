import { memo } from "react"
import AppBar from "./appbar"
import { Box, Container } from '@mui/system';
import { Outlet } from "react-router";

const PageLayout = (props) => {
  const { handleDrawerToggle, title } = props
  
    return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar onDrawerToggle={handleDrawerToggle} title={title} />
        <Box
          component="main"
          sx={{
            flex: 1,
            py: 4,
            px: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    );
}

export default memo(PageLayout)