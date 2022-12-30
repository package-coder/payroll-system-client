import { Typography, Stack, Button } from "@mui/material";
import RoleField from "../../role/components/RoleField";
import React from "react";
import useCreateUser from "../hooks/useCreateUser";
import TextField from "../../../components/TextField";
import { Controller, FormProvider, useForm } from "react-hook-form";

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
        <Stack spacing={2} alignItems="start">
          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <TextField
              name="firstName"
              label="First Name"
              rules={{ required: true }}
            />
            <TextField
              name="lastName"
              label="Last Name"
              rules={{ required: true }}
            />
          </Stack>
          <TextField name="email" label="Email" rules={{ required: true }} />
          <TextField
            name="password"
            label="Password"
            rules={{ required: true }}
            inputProps={{ type: "password" }}
          />
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
        </Stack>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{ mt: 3 }}
        >
          {loading ? "Loading.." : "Create"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default React.memo(UserForm);
