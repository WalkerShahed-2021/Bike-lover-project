import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const ProductBuyNow = () => {
    const { ProductId } = useParams();
    const {user} = useAuth();
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/manyProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        let product = products.filter(pd => pd.id == ProductId)
        setSingleProduct(product);
    }, [products])





    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    //  console.log(singleProduct[0])
     const newProduct = {...data, ...singleProduct[0]}
        axios.post('http://localhost:5000/Buyer', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    console.log(data);
                 reset();
                }
            }) 
    };

    return (
        <>
        <Navigation></Navigation>
            <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px', color: 'green' }}>
                Buy Your Favorite Bike!!!!!!
            </Typography>
            {
                singleProduct.length === 0 ?
                    <Box sx={{ textAlign: 'center' }}>
                        <CircularProgress />
                    </Box>
                    : <Box sx={{ mt: 10 }}>
                        <Container>
                            <Grid container spacing={3} sx={{ boxShadow: 1, p: 10, backgroundColor: 'gray' }}>
                                <Grid item xs={12} md={6} sx={{ color: 'white' }}>
                                    <Box sx={{ boxShadow: 1, backgroundColor: '#3b5998', p: 2 }}>
                                        <img style={{ width: '100%' }} className="w-25" src={singleProduct[0]?.img} alt="" />
                                        <h1 style={{ textAlign: 'center' }} className="mt-4">{singleProduct[0]?.name}</h1>
                                        <h2 style={{color: 'green', textAlign: 'center' }}>Price: ${singleProduct[0]?.price}</h2>
                                        <p>{singleProduct[0]?.discription}</p>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ marginTop: '40px', boxShadow: 1, backgroundColor: '#1DA1F2', textAlign: 'center', p: 2 }}>
                                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', }}>
                                        <input defaultValue={user.displayName} placeholder='Name' style={{ width: '300px', padding: '8px' }} {...register("firstName")} /> <br />
                                        <input defaultValue={user.email} placeholder='Email' style={{ width: '300px', padding: '8px' }} {...register("email")} /> <br />
                                        <input placeholder='Address' style={{ width: '300px', padding: '8px' }} {...register("address")} /> <br />
                                        <input placeholder='Phone' style={{ width: '300px', padding: '8px' }} {...register("phone")} /> <br />
                                        <input style={{ width: '300px', padding: '8px', backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' }} type="submit" />
                                    </form>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>}</>
    );
};

export default ProductBuyNow;