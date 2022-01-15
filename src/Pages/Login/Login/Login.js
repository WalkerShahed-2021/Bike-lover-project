import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


// const bg = {
//     background: `url(https://images.unsplash.com/photo-1529539795054-3c162aab037a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxOXx8bG9naW4lMjBpbWd8ZW58MHx8fHwxNjQyMjI1ODM3&ixlib=rb-1.2.1&q=80&w=1080)`,
//     height: '600px',
//     backgroundRepeat: "no-repeat",
//     textAlign: 'center'
// }

const Login = () => {

    const handleLoginSubmit = e =>{

        e.preventDefault()
    }
    return (
     <Box>
            <Container sx={{ textAlign: 'center', marginTop: '100px', }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                Login
            </Typography>
             <form onSubmit={handleLoginSubmit}>
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
                variant="standard"/> <br /> <br />
                <Button variant='contained' sx={{width: '300px'}}>Register</Button> <br />
                 <div>---------------or-----------</div>
                <Link sx={{marginTop: '30px'}} to="/Register">Create a new account? Register</Link>
             </form>
        </Container>
     </Box>
    );
};

export default Login;

