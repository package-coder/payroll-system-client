import { FormControl, Label, InputLabel, MenuItem, OutlinedInput, Select, FormLabel } from '@mui/material'
import React from 'react'

const RoleField = (props) => {
  const { value, onChange, onBlur, required, error } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <FormControl error={error} required={required} size="small">
      <Select
        value={value}
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