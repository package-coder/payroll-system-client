import React from 'react'
import { CircularProgress, Switch } from '@mui/material'
import useEnableUser from '../hooks/useEnableUser'


const UserSwitch = (props) => {
    const { id, value } = props

    const { 
        enableUser,
        queryResult: {
          loading
        }
    } = useEnableUser()

    const [checked, setChecked] = React.useState(value);

  const handleChange = async (event) => {
    const checked = event.target.checked
    try {
        await enableUser(id, checked)
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

export default UserSwitch