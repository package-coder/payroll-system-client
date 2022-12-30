import React from 'react'
import { Button } from "@mui/material";
import TextField from '../../../components/TextField';
import { FormProvider, useForm } from "react-hook-form";
import useCreatePosition from '../hooks/useCreatePosition';


const PositionForm = (props) => {  
    const { onSubmit, onCancel } = props;

    const {
        createPosition,
        queryResult: { loading, error },
    } = useCreatePosition();

    const methods = useForm();
    const { handleSubmit } = methods;

    const handleFormSubmit = async (data) => {
        try {
            await createPosition(data);
            onSubmit && onSubmit();
        } catch (e) {
            console.log(e);
        }
    };
    
    return (
        <FormProvider {...methods}>
            <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
                <TextField 
                    name='name'
                    label='Name'
                    rules={{ required: true }}
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{ mt: 3 }}
                    >
                    {loading ? "Loading.." : "Create"}
                </Button>
            </form>
        </FormProvider>
    )
}

export default PositionForm