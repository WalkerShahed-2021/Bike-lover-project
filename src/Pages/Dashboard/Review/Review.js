import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';




const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://murmuring-cove-61906.herokuapp.com/Review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Add Your Review')
                }
                reset();
            })
        console.log(data);
    }

    return (
        <div>
            <h1 style={{ marginTop: '100px', textAlign: 'center' }}>Customer Review</h1>
            <Box sx={{ textAlign: 'center' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: '300px', height: '30px', border: '3px solid green', marginTop: '10px', borderRadius: '8px' }} placeholder='Name' defaultValue={user.displayName} {...register("firstName")} /> <br />
                    <input style={{ width: '300px', height: '30px', border: '3px solid green', marginTop: '10px', borderRadius: '8px' }} placeholder='img url'  {...register("img")} /> <br />
                    <input style={{ width: '300px', height: '30px', border: '3px solid green', marginTop: '10px', borderRadius: '8px' }} placeholder='Rating'  {...register("Retings")} /> <br />
                    <input style={{ width: '300px', height: '60px', border: '3px solid green', marginTop: '10px', borderRadius: '5px' }} placeholder='Discription'  {...register("Discription")} /> <br />
                    <input style={{ width: '300px', color: 'white', backgroundColor: 'gray', height: '30px', border: '3px solid green', marginTop: '10px', borderRadius: '10px' }} type="submit" />
                </form>
            </Box>
        </div>
    );
};

export default Review;