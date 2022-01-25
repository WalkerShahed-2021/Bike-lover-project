import { Box,  Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const SeeManyProduct = ({ product }) => {
    const { img, name, discription, price } = product;
    return (
        <Grid item xs={3} sm={4} md={4} data-aos="fade-up">
            <Card sx={{ minWidth: 275 }} data-aos="fade-up">
                <CardContent className='hover-style' data-aos="fade-up">
                    <img style={{ width: '100%' }} src={img} alt="" data-aos="fade-up" />
                    <Typography  data-aos="fade-up" variant='h3' sx={{ fontWeight: 'bold', fontSize: 30, color: '#00e5ff' }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body" data-aos="fade-up" component="div">
                        {discription}
                    </Typography>
                </CardContent>
                <Box textAlign='center' sx={{ mb: 2 }} data-aos="fade-up">
                    <Typography variant="h6" sx={{ mb: 2 }} component="div" data-aos="fade-up">
                        ${price}
                    </Typography>

                </Box>
            </Card>
        </Grid>
    );
};

export default SeeManyProduct;