import React from 'react'
import { CircularProgress, Switch } from '@mui/material'
import useEnablePosition from '../hooks/useEnablePosition'


const PositionSwitch = (props) => {
    const { id, value } = props

    const { 
        enablePosition,
        queryResult: {
            loading
        }
    } = useEnablePosition()

    const [checked, setChecked] = React.useState(value);

  const handleChange = async (event) => {
    const checked = event.target.checked
    try {
        await enablePosition(id, checked)
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

export default PositionSwitch