import { Card, Container, CardActions, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DisplayReview from './DisplayReview/DisplayReview';


const HomeReview = () => {
    const { ProductId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [singleReview, setSingleReview] = useState([])
    console.log(singleReview)


    useEffect(() => {
        fetch('https://murmuring-cove-61906.herokuapp.com/Review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    useEffect(() => {
        let Reviews = reviews.filter(review => review.id == ProductId);
        setSingleReview(Reviews);
    }, [reviews])

    return (
        <Container>
            <h1 style={{ marginTop: '50px', textAlign: 'center' }}>Customer Review !!!!!</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {singleReview.map((oneReview, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                        <DisplayReview
                            oneReview={oneReview}
                        ></DisplayReview>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomeReview;




