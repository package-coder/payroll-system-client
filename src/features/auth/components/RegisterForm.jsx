import React from "react";
import {
  Stack,
  Button,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "../../../components/TextField";
import { useNavigate } from "react-router";
import PasswordField from "../../../components/PasswordField";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import useCreateUser from "../../user/hooks/useCreateUser";

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
    createUser,
    queryResult: { 
      loading,
      error
    },
  } = useCreateUser();
  const navigate = useNavigate();
  const methods = useForm();

  const { 
    handleSubmit,  
    resetField,
    formState: {
      isValid,
      isSubmitted
    }
  } = methods;

  const onSubmit = async (data) => {
    try {
      await createUser({
        ...data,
        verified: false
      });
    } catch (e) {
      console.error(e);
    }
    finally {
      resetField({})
    }
  };

  if(isSubmitted && error?.message?.split('@')[0] == 'ITEM_ALREADY_EXISTS') {
    return (
      <div>
        <Button
          fullWidth 
          variant='outlined'
          sx={{ 
            color: 'grey', 
            borderColor: 'gray',
            py: 6,
            px: 4,
            textAlign: 'center'
          }}
          onClick={() => navigate('/login')}
        >
          <Typography
            fontSize='16px'
            color='white'
          >
            👀 Account already exists.
            <br />
            Try resolve this by resetting 
            <br/>
            your password.
          </Typography>
        </Button>
        <Button 
          fullWidth 
          variant='outlined'
          sx={{ 
            mt: 1,
            color: 'grey', 
            borderColor: 'gray',
            height: '3rem'
          }}
          onClick={() => navigate('/forgot-password')}
        >
          Forgot Password
        </Button>
      </div>
    )
  }

  if(isSubmitted) {
    return (
      <Button
        fullWidth 
        variant='outlined'
        sx={{ 
          color: 'grey', 
          borderColor: 'gray',
          py: 6,
          px: 4,
          textAlign: 'center'
        }}
        onClick={() => navigate('/login')}
      >
        <Typography
          fontSize='16px'
          color='white'
        >
          ✅ Created Successfully.
          <br />
          You will recieve an email when 
          <br />
          the admin approves.
        </Typography>
      </Button>
    )
  } 

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
          {error?.message && (
            <FormHelperText 
              sx={{ textAlign: 'center' }}
              error
            >
              {error?.message?.split('@')[1]}
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
            height: '3rem'
          }}
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
