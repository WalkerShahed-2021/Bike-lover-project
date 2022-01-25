import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ProductBuyNow from './Pages/ProductBuyNow/ProductBuyNow';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
     <AuthProvider>
        <Router>
        <Switch>
         <PrivateRoute path="/Dashboard">
             <Dashboard></Dashboard>
          </PrivateRoute>
        <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/Register">
            <Register></Register>
          </Route>
          <Route exact path="/Explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute exact path="/ProductBuyNow/:ProductId">
              <ProductBuyNow></ProductBuyNow>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
  );
}

export default App;