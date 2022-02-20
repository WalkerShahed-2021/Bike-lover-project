import { Button, Card, CardContent, Grid, Box, Typography } from '@mui/material';
import React from 'react';

const SeeOrder = ({ user }) => {
    const { firstName, price, address, phone, _id, img } = user;

    const handleDeletedProduct = id => {
        const uri = `https://murmuring-cove-61906.herokuapp.com/Buyer/${id}`;
        fetch(uri, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete Order sucessfully');
                    // const remaningUser = user.filter( u => u._id !== id);
                    // user(remaningUser);
                }
            })
    }
    return (
        <Grid item xs={4} sm={4} md={4} data-aos="fade-right">
            <Card sx={{ minWidth: 275 }} data-aos="fade-right">
                <CardContent className='hover-style' data-aos="fade-right">
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <img style={{ width: '100%' }} src={img} alt="" data-aos="fade-right" />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography data-aos="fade-right" variant='h3' sx={{ fontWeight: 'bold', fontSize: 30, color: '#00e5ff' }} color="text.secondary" gutterBottom>
                                {firstName}
                            </Typography>
                            <Typography variant="body" data-aos="fade-right" component="div">
                                <span style={{ fontSize: '20px' }}>Address:</span> {address}
                            </Typography>
                            <Typography variant="body" data-aos="fade-right" component="div">
                                <span style={{ fontSize: '20px' }}>Phone:</span> {phone}
                            </Typography>
                            <Box textAlign='center' sx={{ mb: 2 }} data-aos="fade-right">
                                <Typography variant="h6" sx={{ mb: 2 }} data-aos="fade-right" component="div">
                                    ${price}
                                </Typography>
                                <Button onClick={() => handleDeletedProduct(_id)} style={{ backgroundColor: 'red' }} variant='contained'>Delete Order</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SeeOrder;





