import React from 'react'
import { CircularProgress, Switch } from '@mui/material'
import useEnableDepartment from '../hooks/useEnableDepartment'


const DepartmentSwitch = (props) => {
    const { id, value } = props

    const { 
        enableDepartment,
        queryResult: {
            loading
        }
    } = useEnableDepartment()

    const [checked, setChecked] = React.useState(value);

  const handleChange = async (event) => {
    const checked = event.target.checked
    try {
        await enableDepartment(id, checked)
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

export default DepartmentSwitch