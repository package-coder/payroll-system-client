import React from 'react'
import { Button, Drawer, Box } from '@mui/material';
import UserForm from './UserForm';

const drawerWidth = 350

const UserDrawer = () => {
    const [open, setOpen] = React.useState()

    const toggleDrawer = () => setOpen(open => !open)
  return (
    <>
        <Button variant="contained" onClick={toggleDrawer}>Add User</Button>
        <Drawer
            anchor='left'
            open={open}
            onClose={toggleDrawer}
            PaperProps={{ style: { width: drawerWidth } }}
        >
            <Box
                sx={{
                    minHeight: '100%',
                    bgcolor: 'white',
                    px: 3,
                    py: 2
                }}
            >
                <UserForm />
            </Box>
        </Drawer>
    </>
  )
}

export default React.memo(UserDrawer)