import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar  position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bike Lover
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white', }} to="/home"><Button color="inherit">Home</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white', }} to="/Explore"><Button color="inherit">Explore</Button></Link>

                    {
                        user?.email ?
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white', }} to="/Dashboard"><Button color="inherit">Dashboard</Button></Link>
                                <Link onClick={logOut} style={{ textDecoration: 'none', color: 'white', }} to="/login"><Button style={{ backgroundColor: 'red' }} variant='contained' color="inherit">logout</Button></Link>
                            </Box>

                            : <Link style={{ textDecoration: 'none', color: 'white', }} to="/login"><Button color="inherit">login</Button></Link>

                    }
                   

                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Navigation;
