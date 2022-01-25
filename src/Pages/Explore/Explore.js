import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import ExtraExplore from './ExtraExplore/ExtraExplore';
import CircularProgress from '@mui/material/CircularProgress';

const Explore = () => {
    const [explores, setExplores] = useState([]);
    console.log(explores);


    useEffect(() => {
        fetch('http://localhost:5000/manyProducts')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])


    return (
        <Box>
            <Navigation></Navigation>
                <Container>
                    <Typography sx={{ fontWeight: 'bold', mt: '70px', color: 'green' }} variant='h4'>
                        Our Top Branded Bike-----
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {explores.length === 0 ?
                            <CircularProgress />
                            :
                            explores.map(explore => <ExtraExplore
                                key={explore.id}
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
 <div >
       </div>
                           <Grid item xs={4} sm={4} md={4}>
                                <Card sx={{ minWidth: 275 }}>
                                 
                                </Card>
                            </Grid>
*/