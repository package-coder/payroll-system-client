import { memo } from "react"
import AppBar from "./main/appbar"
import { Box, Container } from '@mui/system';
import { Outlet } from "react-router";

const DefaultLayout = (props) => {
  const { handleDrawerToggle, title } = props
  
    return (
        <Box
          sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            bgcolor: '#eaeaea'
          }}>
          <AppBar onDrawerToggle={handleDrawerToggle} title={title} />
          <Box 
            component="main" 
            sx={{ 
              flex: 1, 
              py: 6, 
              px: 1
            }}>
            <Container>
                <Outlet />
            </Container>
          </Box>
        </Box>
    )
}

export default memo(DefaultLayout)