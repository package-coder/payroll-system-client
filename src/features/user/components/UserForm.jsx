import { Typography, Stack, Button } from "@mui/material";
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


const data = [
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
  const { onSubmit, onCancel } = props;

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
        <TableGrid 
          disableHeader
          disableHover
          data={data}
          columns={columns}
        />
        <Stack 
          sx={{ mt: 3 }} 
          direction='row' 
          alignItems='center'
          justifyContent='end'
          spacing={2}
        >
          <Button variant='text'>Cancel</Button>
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
