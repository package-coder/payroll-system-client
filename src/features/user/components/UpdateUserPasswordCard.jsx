import { Typography, Stack, Button, CardActionArea, CardContent, CardHeader, Card, CircularProgress } from "@mui/material";
import RoleField from "../../role/components/RoleField";
import React from "react";
import useUpdateUser from "../hooks/useUpdateUser";
import TextField from "../../../components/TextField";
import { Controller, FormProvider, useForm } from "react-hook-form";
import TableGrid from "../../../components/TableGrid";
import _ from 'lodash'
import { useRef } from "react";
import PasswordField from "./PasswordField";

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
      label: 'Password',
      field: (
        <PasswordField
          name="password"
          fullWidth={false}
          rules={{ required: true }}
        />
      )
  },
  {
      label: 'New Password',
      field: (
        <PasswordField
          name="newPassword"
          fullWidth={false}
          rules={{ required: true }}
        />
      )
  },
  {
      label: 'Confirm New Password',
      field: (
        <PasswordField
          name="confirmNewPassword"
          fullWidth={false}
          rules={{ required: true }}
        />
      )
  },
]

const UpdateUserCard = (props) => {
  const { user, onSubmit } = props;
  const {
    updateUser,
    queryResult: {
      loading,
    }
  } = useUpdateUser()

  const methods = useForm({
    defaultValues: user
  });
  const { 
    handleSubmit, 
    watch,
    setValue,
    reset,
} = methods;

  const handleFormSubmit = async (data) => {
    
    const id = user._id
    const password = {
        confirmNewPassword: data.confirmNewPassword,
        newPassword: data.newPassword,
        password: data.password
    }

    try {
      await updateUser(id, { password });
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
          <CardHeader title='Change Password' />
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
              : 'Update Password'
            }
          </CardActionArea>
        </form>
      </Card>
    </FormProvider>
  );
};

export default React.memo(UpdateUserCard);
