import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ExtraExplore = ({ explore }) => {
    console.log(explore);
    const { img, discription, name, price } = explore;
    return (
            <Grid item xs={3} sm={4} md={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent className='hover-style'>
                        <img style={{ width: '100%' }} src={img} alt="" />
                        <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: 30, color: '#00e5ff' }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body" component="div">
                            {discription}
                        </Typography>
                    </CardContent>
                    <Box textAlign='center' sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2 }} component="div">
                            ${price}
                        </Typography>
                        <Button variant='contained'>Buy Now</Button>
                    </Box>
                </Card>
            </Grid>
    );
};

export default ExtraExplore;


/* 
 6084176
 303523
*/