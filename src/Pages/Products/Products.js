import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Product from './Product/Product';
import Explore from '../Explore/Explore';



const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
              <Typography sx={{ textAlign: 'center', mt: 2, color: '#f50057' }} variant='h4'>
                     OUR AVAILABLE PRODUCTS
              </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   {
                      products.map(product => <Product 
                       key={product.name}
                       product={product}
                      ></Product>) 
                   }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;


/* 
  <Container>
            <Typography variant='h3'>Top Brand Moto Cycle</Typography>
            <Grid container wrap spacing={2} style={{ marginTop: '2px' }}>
                {
                    products.map(product => <Product
                        product={product}
                    ></Product>)
                }
            </Grid>
        </Container>
*/