import { Box } from "@mui/system"
import { memo } from "react"
import { Outlet } from "react-router"


const ModuleLayout = () => {
    return (
        <Box
            sx={{ 
                flex: 1,
                display: 'flex', 
                flexDirection: 'column',
            }}
        >
            <Outlet />
        </Box>
    )
}


export default memo(ModuleLayout)