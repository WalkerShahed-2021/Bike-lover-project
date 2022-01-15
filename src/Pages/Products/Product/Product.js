import { Box, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  './Product.css';

const Product = ({ product }) => {
    const { name, img, discription, price } = product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent className='hover-style'>
                  <img style={{width: '100%'}} src={img} alt="" />
                    <Typography variant='h3' sx={{fontWeight: 'bold', fontSize: 30, color: '#00e5ff' }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body" component="div">
                        {discription}
                    </Typography>
                </CardContent>
                <Box  textAlign='center' sx={{ mb: 2 }}>
                 <Typography variant="h6" sx={{mb:2}} component="div">
                        ${price}
                    </Typography>
                   <Button variant='contained'>Buy Now</Button>
                </Box>
            </Card>
        </Grid>
    );
};

export default Product;

