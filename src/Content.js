import React, { Component, useState, useMemo, useContext } from 'react';
import './App.css';
import NavbarProtected from './components/Navbar/NavbarProtected';
import NavbarUnprotected from './components/Navbar/NavbarUnprotected';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

import { GlobalContext } from './context/GlobalState';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

const Content = () => {
  const { auth } = useContext(GlobalContext);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          auth ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
        }
      />
    );
  };

  return (
    <Router>
      {auth ? <NavbarProtected /> : <NavbarUnprotected />}
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Registration} />
        <PrivateRoute>
          <PrivateRoute exact path='/Profile' component={Login} auth={auth} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Content;
