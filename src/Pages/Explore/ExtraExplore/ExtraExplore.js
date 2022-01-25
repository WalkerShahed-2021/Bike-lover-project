import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ExtraExplore = ({ explore }) => {
    const { img, discription, name, price, id } = explore;

    const history = useHistory();

   
    return (
            <Grid item xs={3} sm={4} md={4} data-aos="fade-up">
                <Card sx={{ minWidth: 275 }} data-aos="fade-up">
                    <CardContent className='hover-style' data-aos="fade-up">
                        <img data-aos="fade-up" style={{ width: '100%' }} src={img} alt="" />
                        <Typography data-aos="fade-up" variant='h3' sx={{ fontWeight: 'bold', fontSize: 30, color: '#00e5ff' }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body" component="div" data-aos="fade-up">
                            {discription}
                        </Typography>
                    </CardContent>
                    <Box textAlign='center' sx={{ mb: 2 }}>
                        <Typography data-aos="fade-up" variant="h6" sx={{ mb: 2 }} component="div">
                            ${price}
                        </Typography>
                       <Link style={{textDecoration: 'none'}} to={`/ProductBuyNow/${id}`}>
                           <Button  data-aos="fade-up" variant='contained'>Buy Now</Button>
                       </Link>
                         
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