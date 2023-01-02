import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useLazyGetPositions } from '../hooks/useGetPositions';

const getEnabledPositions = (positions) => {
  if(!positions) return []

  return positions.filter(position => position.enabled)
}

const PositionsAutoComplete = (props) => {
    const { 
        value = null, 
        onChange,
        error
    } = props

    const { getPositions } = useLazyGetPositions()
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const loading = open && options.length === 0;
  
    React.useEffect(() => {
      let active = true;
  
      if (!loading) return undefined;
  
      (async () => {  
        if (active) {
          const positions = await getPositions()
          setOptions(getEnabledPositions(positions));
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
        sx={{ minWidth: 218 }}
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
            helperText={error || ''}
          />
        )}
      />
    );
}


export default PositionsAutoComplete