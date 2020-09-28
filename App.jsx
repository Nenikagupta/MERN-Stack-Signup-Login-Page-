import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Reset from "./Reset";
import Home from "./Home";
import Logout from "./Logout";

function App(){
  return(
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/reset/:id" component={Reset} />
      <Route path="/home/:id" component={Home} />
      <Route path="/logout" component={Logout} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </Router>
  )
}



export default App;
