import * as React from 'react';
import { Typography, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Rating from 'react-rating';







const DisplayReview = ({ oneReview }) => {
    const { img, Retings, Discription, firstName } = oneReview;

    return (
        <Box>
            <Box>
                <Card sx={{ minWidth: 275, }} data-aos="fade-left">
                    <CardContent sx={{ m: 1 }} data-aos="fade-left">
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom data-aos="fade-left">
                            {Discription}
                        </Typography>
                    </CardContent>
                    <CardActions data-aos="fade-left">
                        <img style={{ width: '25%', borderRadius: '500px' }} src={img} alt="" />
                        <Typography variant='h5' sx={{ color: 'success.main', fontWeight: 'bold', m: 2 }} data-aos="fade-left">
                            {firstName} <br /> <span style={{ fontSize: '15px', color: 'black', m: 1 }}>Rating: {Retings} </span> <br />
                            <span style={{ fontSize: '20px', color: ' #FF9529',  m: 1 }}> <Rating
                                initialRating={Retings}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                            ></Rating> </span>
                        </Typography>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
};

export default DisplayReview;