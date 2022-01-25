import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const AddAProduct = () => {
    const {user} = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/manyProducts', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Add product successfuly')
            }
           reset();
        })
        console.log(data)
    }

    return (
        <div className='App'>
            <h1 style={{ marginTop: '100px', textAlign: 'center' }}>Add A Product</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{width: '300px', height: '30px', border: '3px solid green', marginTop: '10px', borderRadius: '8px'}} placeholder='Type-Product-Name'  {...register("name")} /> <br />
                    <input style={{width: '300px', height: '30px', border: '3px solid green',marginTop: '10px', borderRadius: '8px'}} placeholder='img url'  {...register("img")} /> <br />
                    <input style={{width: '300px', height: '30px', border: '3px solid green', marginTop: '10px', borderRadius: '8px'}} placeholder='Price'  {...register("price")} /> <br />
                    <input style={{width: '300px', height: '60px', border: '3px solid green', marginTop: '10px', borderRadius: '5px'}} placeholder='Discription'  {...register("discription")} /> <br />
                    <input style={{width: '300px', color: 'white', backgroundColor: 'gray', height: '30px', border: '3px solid green', marginTop: '10px', borderRadius: '10px'}} type="submit" />
                </form>
        </div>
    );
};

export default AddAProduct;