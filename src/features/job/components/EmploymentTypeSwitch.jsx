import React from 'react'
import { CircularProgress, Switch } from '@mui/material'
import useEnableEmploymentType from '../hooks/useEnableEmploymentType'


const EmploymentTypeSwitch = (props) => {
    const { id, value } = props

    const { 
        enableEmploymentType,
        queryResult: {
            loading
        }
    } = useEnableEmploymentType()

    const [checked, setChecked] = React.useState(value);

  const handleChange = async (event) => {
    const checked = event.target.checked
    try {
        await enableEmploymentType(id, checked)
        setChecked(checked); 
    } catch (e) {
        console.log(e)
    }
  };

  if(loading) return <CircularProgress size={20} />

  return (
    <Switch 
        checked={checked} 
        size="small"
        onChange={handleChange}    
    />
  )
}

export default EmploymentTypeSwitch