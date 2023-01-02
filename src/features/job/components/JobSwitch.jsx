import React from 'react'
import { CircularProgress, Switch } from '@mui/material'
import useEnableJob from '../hooks/useEnableJob'


const JobSwitch = (props) => {
    const { id, value } = props

    const { 
        enableJob,
        queryResult: {
            loading
        }
    } = useEnableJob()

    const [checked, setChecked] = React.useState(value);

    const handleClick = (e) => { e.stopPropagation() }
  const handleChange = async (event) => {
    const checked = event.target.checked
    try {
        await enableJob(id, checked)
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
        onClick={handleClick}
        onChange={handleChange}    
    />
  )
}

export default JobSwitch