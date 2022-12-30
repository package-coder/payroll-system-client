import React from 'react'
import TextField from '../../../components/TextField';
    
const DepartmentForm = (props) => {
    const { handleSubmit } = props

    return (
        <form noValidate onSubmit={handleSubmit}>
            <TextField 
                name='name'
                label='Name'
                rules={{ required: true }}
            />
        </form>
    )
}

export default DepartmentForm