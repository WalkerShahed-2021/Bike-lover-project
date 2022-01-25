import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const OurServices = () => {
    const img = 'https://www.harley-davidson.com/content/dam/h-d/images/content-images/hero-cards/3-up/marketplace-sell-your-bike-looking-hero-card-3-up.jpg?impolicy=myresize&rw=650'
    return (
        <div>
            <h1 style={{ marginTop: '50px', textAlign: 'center' }}>Our Services</h1>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} data-aos="fade-right">
                        <Typography  sx={{fontWeight : 'bold'}} variant='h5'>
                            LOOKING TO VALUE YOUR BIKE TO SELL/TRADE AT THE DEALERSHIP?
                        </Typography>
                        <Typography variant='h6'>
                        Its simple and easy to value your bike and get the process started online!
                        Hit submit and get an estimate of your bikes value in real-time. Your dealer will reach out to discuss options should you decide to sell/trade at the dealership.
                        Hit submit and get an estimate of your bikes value in real-time. Your dealer will reach out to discuss options should you decide to sell/trade at the dealership.
                        
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} data-aos="fade-left">
                        <img style={{ width: '75%' }} src={img} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default OurServices;