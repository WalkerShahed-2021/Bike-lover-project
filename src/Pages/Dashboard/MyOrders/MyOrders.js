import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SeeOrder from './SeeOrder/SeeOrder';

const MyOrders = () => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        fetch('https://murmuring-cove-61906.herokuapp.com/Buyer')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <Box style={{ marginTop: '100px', textAlign: 'center' }}>
            <h1>This is My Orders</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    users.map(user => <SeeOrder
                        key={user.id}
                        user={user}
                    ></SeeOrder>)
                }
            </Grid>
        </Box>
    );
};

export default MyOrders;