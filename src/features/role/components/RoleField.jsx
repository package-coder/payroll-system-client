import { FormControl, Label, InputLabel, MenuItem, OutlinedInput, Select, FormLabel } from '@mui/material'
import React from 'react'

const RoleField = (props) => {
  const { onChange, onBlur, required } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <FormControl required={required} fullWidth size="small">
      <InputLabel shrink htmlFor="role-select">
        Role
      </InputLabel>
      <Select
        required={required}
        onBlur={onBlur}
        sx={{ mt: 1 }}
        id="role-select"
        onChange={handleChange}
        input={<OutlinedInput />}
      >
        <MenuItem value="SUPERADMIN">SUPER ADMIN</MenuItem>
        <MenuItem value="ADMIN">ADMIN</MenuItem>
        <MenuItem value="USER">USER</MenuItem>
      </Select>
    </FormControl>
  );
};

export default React.memo(RoleField)