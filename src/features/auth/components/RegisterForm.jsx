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
import PasswordField from "../../../components/PasswordField";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const textFieldStyle = {
  backgroundColor: "#212426",
  color: "inherit",
};

const iconButtonStyle = {
  color: 'grey'
}

const visibilityPasswordIcons = {
  showIcon: <VisibilityOutlinedIcon sx={{ fontSize: 16 }}/>,
  offIcon: <VisibilityOffOutlinedIcon sx={{ fontSize: 16 }}/>
}

const RegisterForm = () => {
  const {
    loginUser,
    queryResult: { 
      loading,
      error
    },
  } = useLogin();
  const navigate = useNavigate();
  const methods = useForm();

  const { 
    handleSubmit,  
    formState: {
      isValid
    }
  } = methods;

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
          {error?.message && (
            <FormHelperText 
              sx={{ textAlign: 'center' }}
              error
            >
              {error?.message}
            </FormHelperText>
          )}
          <Stack spacing={1} direction='row'>
            <TextField
                size="small"
                name="firstName"
                fullWidth
                placeholder="First Name"
                rules={{
                required: true,
                }}
                InputProps={{
                style: textFieldStyle,
                }}
            />
            <TextField
                size="small"
                name="lastName"
                fullWidth
                placeholder="Last Name"
                rules={{
                required: true,
                }}
                InputProps={{
                style: textFieldStyle,
                }}
            />
          </Stack>
          <TextField
            size="small"
            name="email"
            placeholder="Email Address"
            rules={{
              required: true,
            }}
            InputProps={{
              style: textFieldStyle,
            }}
          />
         <PasswordField 
            name="password"
            placeholder="Password"
            rules={{ required: true }}
            InputProps={{ style: textFieldStyle }}
            iconButtonStyle={iconButtonStyle}
            {...visibilityPasswordIcons}
          />
        </Stack>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={loading || !isValid}
          sx={{
            mt: 2,
            fontWeight: 600,
          }}
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
