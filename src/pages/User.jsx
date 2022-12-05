import React from 'react'



import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import UserForm from '../features/user/components/UserForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import TableGrid from '../components/TableGrid';


const UserPage = () => {
    const theme = useTheme()
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'))

    const [modal, setModal] = React.useState(false)
    const toggleModal = () => setModal(modal => !modal)

  return (
        <Container maxWidth={modal ? 'xl' : 'md'}>
            <Grid 
                container 
                spacing={3}
                direction={isLgUp ? 'row' : 'column-reverse'}
            >
                <Grid item xs>
                    <TableGrid 
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
                    />
                </Grid>
                {modal && (
                    <Grid item xs={4}>
                        <Card
                            elevation={0}
                            sx={{
                                overflow: 'hidden',
                                p: 5
                            }}
                        >
                            <UserForm onSubmit={toggleModal} onCancel={toggleModal} />
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}

export default UserPage