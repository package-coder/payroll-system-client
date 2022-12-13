import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  TextField as MuiTextField,
} from "@mui/material";
import { Controller } from "react-hook-form";

const TextField = (props) => {
  const { name, label, rules, formProps, controllerProps, ...others } = props;

  return (
    <Controller
      {...controllerProps}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <FormControl
          fullWidth
          variant="standard"
          {...formProps}
          required={rules?.required}
          error={error}
        >
          <InputLabel shrink htmlFor={`${name}-input`}>
            {label}
          </InputLabel>
          <MuiTextField
            size="small"
            sx={{ mt: 2 }}
            required={rules?.required}
            {...others}
            id={`${name}-input`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  rules: PropTypes.any,
  formProps: PropTypes.any,
  controllerProps: PropTypes.any,
};

export default TextField;
