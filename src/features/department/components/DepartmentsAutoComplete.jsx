import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useLazyGetDepartments } from '../hooks/useGetDepartments';

const getEnabledDepartments = (departments) => {
  if(!departments) return []

  return departments.filter(departments => departments.enabled)
}

const DepartmentsAutoComplete = (props) => {
    const { 
        value = null, 
        onChange,
        error
    } = props

    const { getDepartments } = useLazyGetDepartments()
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const loading = open && options.length === 0;

    React.useEffect(() => {
      let active = true;
  
      if (!loading) return undefined;
  
      (async () => {  
        if (active) {
          const departments = await getDepartments()
          setOptions(getEnabledDepartments(departments));
        }
      })();
  
      return () => { active = false; };
    }, [loading]);
  
    React.useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);
  
    const toggleOpen = () => setOpen(open => !open)

    const onValueChange = (_, newValue) => {
      onChange && onChange(newValue)
    }

    return (
      <Autocomplete
        open={open}
        value={value}
        onChange={onValueChange}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
        isOptionEqualToValue={(option, value) => option?._id === value?._id}
        getOptionLabel={(option) => option?.name}
        onOpen={toggleOpen}
        onClose={toggleOpen}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            error={!!error}
            helperText={error  || ''}
          />
        )}
      />
    );
}

export default DepartmentsAutoComplete