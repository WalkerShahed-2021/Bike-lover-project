import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SeeManyProduct from '../SeeManyProduct/SeeManyProduct';

const ManageProducts = () => {
    const [manyProduct, setManyProduct] = useState([]);
    console.log(manyProduct);

    useEffect(() => {
        fetch('https://murmuring-cove-61906.herokuapp.com/manyProducts')
            .then(res => res.json())
            .then(data => setManyProduct(data))
    }, [])
    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 'bold', mt: '40px', color: 'green' }} variant='h4'>
                    Manage Products----
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {manyProduct.length === 0 ?
                        <CircularProgress />
                        :
                        manyProduct.map(product => <SeeManyProduct
                            key={product.id}
                            product={product}
                        > </SeeManyProduct>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ManageProducts;