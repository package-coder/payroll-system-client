import { Typography, Stack, Button, Card, CardContent, CardHeader, Grid, Box, CardActionArea } from "@mui/material";
import RoleField from "../../role/components/RoleField";
import React from "react";
import useCreateUser from "../hooks/useCreateUser";
import TextField from "../../../components/TextField";
import { Controller, FormProvider, useForm } from "react-hook-form";
import TableGrid from "../../../components/TableGrid";

const columns = [
  {  id: 'label' },
  { 
      id: 'field',
      render: (value) => (
          <Stack
              direction='row'
              alignItems='center'
              justifyContent='end'
          >
              {value}
          </Stack>
      ) 
  }
]

const imageData = [
  {
    label: 'Image',
  }
]

const accountTableData = [
  {
      label: 'First Name',
      field: (
        <TextField
          name="firstName"
          fullWidth={false}
          rules={{ required: true }}
        />
      )
  },
  {
      label: 'Last Name',
      field: (
        <TextField
          name="lastName"
          fullWidth={false}
          rules={{ required: true }}
        />
      )
  },
  {
      label: 'Email',
      field: (
        <TextField
          name="email"
          fullWidth={false}
          rules={{ required: true }}
        />
      )
  },
  {
      label: 'Password',
      field: (
        <TextField
          name="password"
          fullWidth={false}
          rules={{ required: true }}
          inputProps={{ type: "password" }}
        />
      )
  },
  {
      label: 'Role',
      field: (
        <Controller
            name="role"
            rules={{ required: true }}
            render={({ field: { value, onChange, onBlur } }) => (
              <RoleField
                required
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
      )
  },
]

const UserForm = (props) => {
  const { 
    onSubmit, 
    onCancel,
    renderActions
  } = props;

  const {
    createUser,
    queryResult: { loading, error },
  } = useCreateUser();

  const methods = useForm();
  const { handleSubmit } = methods;

  const handleFormSubmit = async (data) => {
    try {
      await createUser(data);
      onSubmit && onSubmit();
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container direction='column' spacing={5}>
          <Grid item>
            <Card>
              <Grid 
                container 
                direction='column'
              >
                <Grid item xs>
                  <CardHeader title='Profile Photo' />
                </Grid> 
                <Grid item sx={{ alignSelf: 'center' }}>
                  <CardContent>
                    <Box 
                      sx={{ 
                        height: 130,
                        width: 130,
                        borderRadius: '50%',
                        backgroundColor: 'grey.100'
                      }}
                    />
                  </CardContent>
                </Grid>
              </Grid>
              <CardActionArea>
                Upload photo
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title='Account' />
              <CardContent>
                <TableGrid 
                  disableHeader
                  disableHover
                  data={accountTableData}
                  columns={columns}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Stack 
          sx={{ mt: 3 }} 
          direction='row' 
          alignItems='center'
          justifyContent='end'
        >
          <Button 
              disabled={loading}
              variant='contained' 
              type='submit'
          >
              {loading ? 'Loading...' : 'Submit'}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default React.memo(UserForm);
