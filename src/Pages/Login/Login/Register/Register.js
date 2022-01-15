import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Box>
            <Container sx={{ textAlign: 'center', marginTop: '100px', }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                Login
            </Typography>
             <form>
                <TextField
                sx={{width: '300px'}}
                id="standard-basic"
                label="Your Name"
                type="name"
                variant="standard"/> <br />
                <TextField 
                sx={{width: '300px'}}
                id="standard-basic"
                label="Your Email"
                type="email"
                variant="standard"/> <br />
                <TextField 
                sx={{width: '300px'}}
                id="standard-basic"
                label="password"
                type="password"
                variant="standard"/> <br />
                <TextField 
                sx={{width: '300px'}}
                id="standard-basic"
                label="Confrim password"
                type="password"
                variant="standard"/> <br /> <br />
                <Button variant='contained' sx={{width: '300px'}}>Register</Button> <br />
                  <div>---------------or-----------</div>
                <Link to="/login">You have already Account? Login</Link>
             </form>
        </Container>
     </Box>
    );
};

export default Register;