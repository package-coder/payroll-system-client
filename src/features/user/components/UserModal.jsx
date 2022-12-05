import React from 'react'
import UserForm from './UserForm'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const UserModal = () => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
        <Button 
            variant="contained" 
            sx={{ mr: 1 }}
            onClick={handleClickOpen}
        >
            Add user
        </Button>
        <Dialog
            fullWidth
            maxWidth='xs'
            open={open}
            onClose={handleClose}
        >
            <DialogContent>
                <UserForm />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Create User</Button>
            </DialogActions>
      </Dialog>
    </>
  )
}

export default React.memo(UserModal)