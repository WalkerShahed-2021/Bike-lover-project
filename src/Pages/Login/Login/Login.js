import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';



// const bg = {
//     background: `url(https://images.unsplash.com/photo-1529539795054-3c162aab037a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxOXx8bG9naW4lMjBpbWd8ZW58MHx8fHwxNjQyMjI1ODM3&ixlib=rb-1.2.1&q=80&w=1080)`,
//     height: '600px',
//     backgroundRepeat: "no-repeat",
//     textAlign: 'center'
// }

const Login = () => {
  const { user, logInUser, isLoading, authError, signInWithGoole } = useAuth()
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginSubmit = e => {
    logInUser(loginData.email, loginData.password, location, history);
    e.preventDefault()

  }
  return (
    <Box>
       <Navigation></Navigation>
      <Container sx={{ textAlign: 'center', marginTop: '100px', }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Login
        </Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            sx={{ width: '300px' }}
            id="standard-basic"
            label="Your Email"
            type="email"
            name="email"
            onBlur={handleOnChange}
            variant="standard" /> <br />
          <TextField
            sx={{ width: '300px' }}
            id="standard-basic"
            label="password"
            type="password"
            name="password"
            onBlur={handleOnChange}
            variant="standard" /> <br /> <br />
          <Button type='submit' variant='contained' sx={{ width: '300px' }}>Login</Button> <br />
          <Link sx={{ marginTop: '30px' }} to="/Register">Create a new account? Register</Link>
          {isLoading &&
            <CircularProgress />}
          {user?.email && <Alert severity="success">User create successfully!</Alert>}
          {authError && <Alert severity="error">{authError}!</Alert>}
        </form>
        <div>---------------or-----------</div>
        <Button onClick={signInWithGoole}  variant="contained">Google sign In</Button>
      </Container>
    </Box>
  );
};

export default Login;



/* 
slove er agar er code ai ta age celo error soho
{
  "name": "moto-bikes-seles-client-assignments12",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@mui/icons-material": "^5.2.5",
    "@mui/material": "^5.2.8",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.6.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "5.0.0",
    "react-swipeable-views": "^0.14.0",
    "web-vitals": "^2.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/programming-hero-web-course-4/niche-website-client-side-WalkerShahed-2021.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/programming-hero-web-course-4/niche-website-client-side-WalkerShahed-2021/issues"
  },
  "homepage": "https://github.com/programming-hero-web-course-4/niche-website-client-side-WalkerShahed-2021#readme"
}







slove er por er code (slove korar por code ai ta bosale slove hobe)


{
  "name": "doctors-portal-client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@mui/icons-material": "^5.2.5",
    "@mui/material": "^5.2.8",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.6.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "5.0.0",
    "react-swipeable-views": "^0.14.0",
    "web-vitals": "^2.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}




*/