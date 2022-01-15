import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/Register">
        <Register></Register>
      </Route>
        <Route path="/Explore">
            <Explore></Explore>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
