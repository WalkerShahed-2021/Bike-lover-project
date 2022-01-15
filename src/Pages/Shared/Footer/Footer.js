import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box style={{ width: '100%', height: '400px', marginTop: '30px', backgroundColor: 'black', textAlign: 'center' }}>
            <Grid container spacing={2} style={{ color: 'white',}}>
                 <Grid item xs={3}>
                        <Typography sx={{marginTop: '70px', color: 'burlywood'}}>
                           LEARN MORE
                        </Typography>
                        <Typography>

                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{marginTop: '70px', color: 'burlywood'}}>
                            COMPANY
                        </Typography>
                        <Typography>
                            Home
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{marginTop: '70px', color: 'burlywood'}}>
                            SUPPORT
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{marginTop: '70px', color: 'burlywood'}}>
                        <Typography>
                           social Media
                        </Typography>
                    </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;