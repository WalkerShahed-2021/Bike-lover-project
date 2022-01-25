import { Alert, Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation';

const Register = () => {
    const { RegisterUser, user, authError, isLoading , signInWithGoole, auth} = useAuth();

    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleRegisterSubmit = (e) => {
        if (loginData.password == !loginData.password2) {
            alert('Your passeord did not match')
            return
        }
        RegisterUser(loginData.email, loginData.password, loginData.name)
        e.preventDefault()
    }
    return (
        <Box>
          <Navigation></Navigation>
            <Container sx={{ textAlign: 'center', marginTop: '100px', }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                   Create  New Account
                </Typography>
                {!isLoading && <div>
                    <TextField
                        sx={{width: '400px', m:1,}}
                        id="standard-basic"
                        label="Your Name"
                        type="name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard"
                    /> <br />
                    <TextField
                        sx={{width: '400px', m:1,}}
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard"
                    /> <br />

                    <TextField
                        sx={{width: '400px', m:1,}}
                        id="standard-password-input"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                    /> <br />
                    <TextField
                        sx={{width: '400px', m:1,}}
                        id="standard-password-input"
                        label="Re type Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"/> <br /> <br />
                    <Button onClick={handleRegisterSubmit} variant='contained' sx={{ width: '300px' }}>Register</Button> <br />
                    <div>---------------or-----------</div>
                    <Link to="/login">You have already Account? Login</Link>
                </div>}
                {isLoading &&
                    <CircularProgress />}
                {user?.email && <Alert severity="success">User create successfully!</Alert>}
                {authError && <Alert severity="error">{authError}!</Alert>}
            </Container>
        </Box>
    );
};

export default Register;