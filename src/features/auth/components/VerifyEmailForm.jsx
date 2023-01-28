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
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import useLogin from "../hooks/useLogin";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "../../../components/TextField";
import { useNavigate } from "react-router";
import PasswordField from "../../../components/PasswordField";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import useRequestChangePassword from "../hooks/useRequestChangePassword";

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

const VerifyEmailForm = () => {
  const {
    request,
    info,
    queryResult: { 
      loading,
      error,
    },
  } = useRequestChangePassword();
  const methods = useForm();

  const { 
    handleSubmit,  
    formState: {
      isValid
    }
  } = methods;

  const onSubmit = async (data) => {
    const { email } = data;
    try {
      await request(email);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>

        {info ? (
            <>
                <Button
                    fullWidth 
                    variant='outlined'
                    sx={{ 
                        color: 'grey', 
                        borderColor: 'gray',
                        py: 6,
                        position: 'relative'
                    }}
                    href={info?.link}
                >
                    <Typography
                        fontSize='16px'
                        color='white'
                    >
                        ✅ Request change password link was sent.
                    </Typography>
                    <Typography 
                        variant='caption' 
                        color='gray'
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: '8px'
                        }}
                    >
                        Redirect to ethereal mailer
                    </Typography>
                </Button>
            </>
        ) : (
            <>
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
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={loading || !isValid}
                    sx={{
                        mt: 2,
                        fontWeight: 600,
                        height: '3rem'
                    }}
                >
                    {loading ? "Loading..." : "Verify"}
                </Button>
            </>
        )}  
      </form>
    </FormProvider>
  );
};

export default VerifyEmailForm;
