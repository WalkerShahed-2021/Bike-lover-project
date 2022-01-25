import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import motor from '../../../../imges/background-removebg-preview.png';



const BannerBg = {
    backgroundImage: `url(https://i.ibb.co/cC6PVkZ/img-21.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: '600px',

}



const Banner = () => {
    return (
        <Box style={BannerBg} sx={{ flexGrow: 1}}>
            <Container data-aos="fade-left">
                <Grid container spacing={2} style={{ marginTop: '2px' }}>
                    <Grid item xs={6} md={6} sx={{
                        display: 'flex',
                        textAlign: 'left',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Typography sx={{ color: 'white', textAlign: 'center', marginTop: '100px' }} data-aos="fade-left">
                             sit amet consectetur, adipisicing elit. Cum reprehenderit, vitae blanditiis, inventore eligendi at odit adipisci alias animi tempora esse ea eaque fugit officiis aliquid dolore, ad rem laudantium.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum reprehenderit, vitae blanditiis, inventore eligendi at odit adipisci alias animi tempora esse ea eaque fugit officiis aliquid dolore, ad rem laudantium.
                            <br /> <br />
                            <Button data-aos="fade-left" variant="contained">Learn More</Button>
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{
                        display: 'flex',
                        textAlign: 'left',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                      
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;