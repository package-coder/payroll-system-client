import { Box, Button, Stack, InputLabel } from '@mui/material';
import React from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import TableGrid from '../../../components/TableGrid';
import TextField from '../../../components/TextField';
import DepartmentsAutoComplete from '../../department/components/DepartmentsAutoComplete';
import useCreateJob from '../hooks/useCreateJob';
import EmploymentTypesAutoComplete from './EmploymentTypesAutoComplete';
import PositionsAutoComplete from './PositionsAutoComplete';

const columns = [
    { 
        id: 'label',
        render: (value) => (
            <InputLabel shrink>
                {value}
            </InputLabel>
        )
    },
    { 
        id: 'field',
        render: (value) => (
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='end'
            >
                {value}
            </Stack>
        ) 
    }
]


const data = [
    {
        label: 'Name',
        field: (
            <TextField 
                name='name'
                placeholder='Enter name here'
                fullWidth={false}
                rules={{ required: true }}
            />
        )
    },
    {
        label: 'Employment Type',
        field: (
            <Controller 
                name='employmentType'
                rules={{ required: true }}
                render={({ 
                    field: { value, onChange },
                    fieldState: { error } 
                }) => (
                    <EmploymentTypesAutoComplete
                        value={value}
                        onChange={onChange}
                        error={!!error || error?.message}
                    />
                )}
            />
        )
    },
    {
        label: 'Position',
        field: (
            <Controller 
                name='position'
                rules={{ required: true }}
                render={({ 
                    field: { value, onChange },
                    fieldState: { error }  
                }) => (
                    <PositionsAutoComplete
                        value={value}
                        onChange={onChange}
                        error={!!error || error?.message}
                    />
                )}
            />
        )
    },
    {
        label: 'Department',
        field: (
            <Controller 
                name='department'
                rules={{ required: true }}
                render={({ 
                    field: { value, onChange },
                    fieldState: { error }   
                }) => (
                    <DepartmentsAutoComplete
                        value={value}
                        onChange={onChange}
                        error={!!error || error?.message}
                    />
                )}
            />
        )
    },
    {
        label: 'Salary',
        field: (
            <TextField 
                name='salary'
                type='number'
                placeholder='0.00'
                fullWidth={false}
                rules={{ required: true }}
            />
        )
    },
]

const JobForm = (props) => {
    const { onSubmit, onCancel } = props;
    
    const { createJob } = useCreateJob()
    const methods = useForm();
    const { handleSubmit, watch } = methods;

    const handleFormSubmit = async (data) => {
        const job = {
            name: data.name,
            salary: parseFloat(data.salary),
            departmentID: data.department._id,
            employmentTypeID: data.employmentType._id,
            positionID: data.position._id
        }

        try {
            await createJob(job)
            onSubmit && onSubmit();
        } catch (e) {
            console.log(e);
        }
    }
    
  return (
    <FormProvider {...methods}>
        <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>            
            <TableGrid 
                disableHeader
                disableHover
                data={data}
                columns={columns}
            />
            <Stack 
                sx={{ mt: 3 }} 
                direction='row' 
                alignItems='center'
                justifyContent='end'
                spacing={2}
            >
                <Button variant='text'>Cancel</Button>
                <Button variant='contained' type='submit'>Submit</Button>
            </Stack>
        </form>
    </FormProvider>
  )
}

export default JobForm