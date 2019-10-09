import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import React from "react";
import {isAuthenticated} from './services/auth';
import SignIn from "./pages/SignIn";
import Home from "./Home";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  )
  
  const Routes = () => (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={()=> <h1>SignUp</h1>} />
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="*" component={()=> <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
  );

  export default Routes;

