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

  const _onSubmit = async (data) => {
    try {
      await createUser(data);
      onSubmit && onSubmit();
    } catch (e) {
      console.log(e);
    }
  };

  console.log(error, loading);

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(_onSubmit)}>
        <Typography variant="h6" fontWeight="fontWeightBold" sx={{ mb: 2 }}>
          Add User Manually
        </Typography>
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{
            minWidth: "100%",
            mt: 4,
          }}
        >
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            onClick={onCancel && onCancel}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
          >
            {loading ? "Loading.." : "Create User"}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default React.memo(UserForm);
