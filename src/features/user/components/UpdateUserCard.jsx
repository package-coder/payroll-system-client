import { Typography, Stack, Button, CardActionArea, CardContent, CardHeader, Card, CircularProgress } from "@mui/material";
import RoleField from "../../role/components/RoleField";
import React from "react";
import useUpdateUser from "../hooks/useUpdateUser";
import TextField from "../../../components/TextField";
import { Controller, FormProvider, useForm } from "react-hook-form";
import TableGrid from "../../../components/TableGrid";
import _ from 'lodash'
import { useRef } from "react";

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
          InputProps={{
            readOnly: true,
          }}
          rules={{ required: true, disabled: true }}
        />
      )
  },
  {
      label: 'Role',
      field: (
        <Controller
            name="role"
            rules={{ required: true }}
            render={({ 
              field: { value, onChange, onBlur },
              fieldState: { error }
            }) => (
              <RoleField
                required
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={error}
              />
            )}
          />
      )
  },
]

const UpdateUserCard = (props) => {
  const { 
    user,
    onSubmit
  } = props;

  const {
    updateUser,
    queryResult: {
      loading,
    }
  } = useUpdateUser()

  const methods = useForm({
    defaultValues: user
  });
  const { handleSubmit } = methods;

  const handleFormSubmit = async (data) => {
    
    const id = data._id
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role
    }

    try {
      await updateUser(id, user);
      onSubmit && onSubmit()
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <Card>
        <form 
          noValidate 
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <CardHeader title='Account' />
          <CardContent>
            <TableGrid 
              disableHeader
              disableHover
              data={data}
              columns={columns}
            />
          </CardContent>
          <CardActionArea 
            disableRipple
            type='submit'
            sx={{ textAlign: 'right' }}
          >
            {
              loading 
              ? <CircularProgress size='1rem' />
              : 'Update User'
            }
          </CardActionArea>
        </form>
      </Card>
    </FormProvider>
  );
};

export default React.memo(UpdateUserCard);
