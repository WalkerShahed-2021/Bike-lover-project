import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import ExtraExplore from './ExtraExplore/ExtraExplore';

const Explore = () => {
    const [explores, setExplores] = useState([]);
    console.log(explores);


    useEffect(() => {
        fetch('./Explore.json')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <Box>
          <Navigation></Navigation>
            <Container>
                <Typography sx={{fontWeight: 'bold', mt: '40px', color: 'green'}} variant='h4'>
                    Our Top Branded Bike-----
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   {
                    explores.map(explore => <ExtraExplore
                     explore={explore.name}
                      explore={explore}
                    > </ExtraExplore>)
                   }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explore;


/* 
                           <Grid item xs={4} sm={4} md={4}>
                                <Card sx={{ minWidth: 275 }}>
                                 
                                </Card>
                            </Grid>
*/