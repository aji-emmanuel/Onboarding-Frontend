import { useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import "./assets/css/scss/teamlion.scss?v=2.0.0";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/homepage/Home";
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Unathourized from './pages/auth/Unathourized';
import User from "./pages/user/User";
import UserProfile from './pages/user/UserProfile';
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import store from './redux/store/Store';
import setAuthToken from './utilities/setAuthToken';
import PrivateRoute from './utilities/PrivateRoute';

if(localStorage.token){
    setAuthToken(localStorage.token);
};

function App() {
   useEffect(()=>{
    // Initailizes Materialize javascript
    M.AutoInit();
  });
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute path="/hr" component={(props) => <Layout {...props} />} />
          <PrivateRoute path="/employee" component={(props) => <Layout {...props} />} />
          <Route exact path="/" component = {Home} />
          <PrivateRoute exact path="/user" component ={User} />
          <PrivateRoute exact path="/user/profile" component ={UserProfile} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/forgot_password" component={ForgotPassword} />
          <Route exact path="/reset_password" component={ResetPassword} />
          <Route exact path="/unauthorized" component={Unathourized} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;