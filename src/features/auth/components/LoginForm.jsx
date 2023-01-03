import React from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Box,
  Stack,
  Button,
  Avatar,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import useLogin from "../hooks/useLogin";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "../../../components/TextField";
import { useNavigate } from "react-router";

const textFieldStyle = {
  backgroundColor: "#212426",
  color: "inherit",
};

const LoginForm = () => {
  const {
    loginUser,
    queryResult: { 
      loading,
      error
    },
  } = useLogin();
  const navigate = useNavigate();
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await loginUser(email, password);
      navigate("/users");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
        <FormHelperText 
            sx={{ textAlign: 'center' }}
            error
          >
            {error?.message || ''}
          </FormHelperText>
          <TextField
            size="small"
            name="email"
            placeholder="Enter email address"
            autoComplete="current-email"
            rules={{
              required: true,
            }}
            InputProps={{
              style: textFieldStyle,
            }}
          />
          <TextField
            size="small"
            name="password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            rules={{
              required: true,
            }}
            InputProps={{
              style: textFieldStyle,
            }}
          />
        </Stack>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            mt: 3,
            py: 1,
            fontWeight: "medium",
          }}
        >
          {loading ? <CircularProgress size={24} /> : "Sign In"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
