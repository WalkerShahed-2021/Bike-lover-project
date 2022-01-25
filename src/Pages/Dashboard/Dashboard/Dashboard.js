import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';
import PayAmount from '../PayAmount/PayAmount';
import Review from '../Review/Review';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import DashboardHome from './../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddAProduct from '../AddAProduct/AddAProduct';
import ExtraManage from '../ManageProducts/ExtraManage/ExtraManage';
import SeeManyProduct from '../SeeManyProduct/SeeManyProduct';

const drawerWidth = 200;

const logo = {
  img: 'https://i.ibb.co/xfkLgW7/s-bikes-black.png',
}

function Dashboard(props) {
  const { user, logOut, admin } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const history = useHistory();

  const handleClicked = () => {
    history.push('/home')
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box style={{ textAlign: 'center' }}>
        <img style={{ width: '50%' }} src={logo.img} alt="" />
      </Box>
      <Toolbar />
      <Divider />
      <Box sx={{ marginLeft: '10px' }}>
          {!admin && <Box>
            <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}`}> <Button>Dashboard Home</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}/MyOrders`}> <Button>My Orders</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}/Review`}> <Button>Review</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}/PayAmount`}> <Button>Pay</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to="/home"> <Button onClick={handleClicked}> Back Home</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}`}> <Button variant='contained' onClick={logOut}>Logout</Button></Link>
          </Box>}
         { admin && <Box>
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}/ManageAllOrders`}> <Button>Manage All Orders</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}/AddAProduct`}> <Button>Add A Product</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}/MakeAdmin`}> <Button>Make Admin</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}/ExtraManage`}> <Button>Manage Products</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to="/home"> <Button onClick={handleClicked}> Back Home</Button></Link> <br />
          <Link style={{ textDecoration: 'none', color: 'white', }} to={`${url}`}> <Button variant='contained' onClick={logOut}>Logout</Button></Link>
        </Box>}
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/MyOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/PayAmount`}>
            <PayAmount></PayAmount>
          </Route>
          <Route exact path={`${path}/Review`}>
            <Review></Review>
          </Route>
          <Route exact path={`${path}/MakeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path={`${path}/ManageAllOrders`}>
          </Route>
          <Route exact path={`${path}/AddAProduct`}>
            <AddAProduct></AddAProduct>
          </Route>
          <Route exact path={`${path}/ExtraManage`}>
           <SeeManyProduct></SeeManyProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
