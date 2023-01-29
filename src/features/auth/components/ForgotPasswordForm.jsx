import React from "react";
import {
  Typography,
  Stack,
  Button,
  FormHelperText,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import PasswordField from "../../../components/PasswordField";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import useChangeUserPassword from "../hooks/useChangeUserPassword";
import { useNavigate } from "react-router";

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

const ForgotPasswordForm = (props) => {

  const { accessToken } = props

  const {
    changeUserPassword,
    info,
    queryResult: { 
      loading,
      error
    },
  } = useChangeUserPassword();
  const navigate = useNavigate()

  const methods = useForm();
  const { 
    handleSubmit,  
    resetField,
    formState: {
      isValid,
      isSubmitted,
    }
  } = methods;

  const onSubmit = async (data) => {
    const { 
      password, 
      newPassword, 
      confirmNewPassword 
    } = data;

    try {
      await changeUserPassword(
        accessToken, 
        password,
        newPassword,
        confirmNewPassword
      );
    } catch (e) {
      console.error(e);
    }
    finally {
      resetField({})
    }
  };
  
  if(info && isSubmitted && !error?.message) {
    return (
      <Button
          fullWidth 
          variant='outlined'
          sx={{ 
              color: 'grey', 
              borderColor: 'gray',
              py: 6,
              position: 'relative'
          }}
          onClick={() => navigate('/login')}
      >
          <Typography
              fontSize='16px'
              color='white'
          >
              ✅ Change password successfully.
          </Typography>
      </Button>
    )
  } 

  if(isSubmitted && error?.message.split('@')[0] === 'ACCESS_LINK_EXPIRED') {
    return (
      <Button
          fullWidth 
          variant='outlined'
          sx={{ 
              color: 'grey', 
              borderColor: 'gray',
              py: 6,
              position: 'relative'
          }}
          onClick={() => navigate('/forgot-password')}
      >
          <Typography
              fontSize='16px'
              color='white'
          >
              🚫 Request change password link was expired.
          </Typography>
      </Button>
    )
  }

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack 
            direction="column" 
            spacing={1} 
            sx={{ width: "100%" }}
        >
          {error?.message && (
            <FormHelperText 
              sx={{ textAlign: 'center' }}
              error
            >
              {error?.message?.split('@')[1]}
            </FormHelperText>
          )}
          <PasswordField 
            name="password"
            placeholder="Password"
            rules={{ required: true }}
            InputProps={{ style: textFieldStyle }}
            iconButtonStyle={iconButtonStyle}
            {...visibilityPasswordIcons}
          />
          <PasswordField 
            name="newPassword"
            placeholder="New Password"
            rules={{ required: true }}
            InputProps={{ style: textFieldStyle }}
            iconButtonStyle={iconButtonStyle}
            {...visibilityPasswordIcons}
          />
          <PasswordField 
            name="confirmNewPassword"
            placeholder="Confirm New Password"
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
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ForgotPasswordForm;
