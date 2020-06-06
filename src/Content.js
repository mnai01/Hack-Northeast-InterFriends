import React, { Component, useState, useMemo, useContext } from 'react';
import './App.css';
import NavbarProtected from './components/Navbar/NavbarProtected';
import NavbarUnprotected from './components/Navbar/NavbarUnprotected';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Landing from './components/Landing/Landing';

import { toast } from 'react-toastify';

import { GlobalContext } from './context/GlobalState';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

const Content = () => {
  const { auth, loginError, RegisterError } = useContext(GlobalContext);

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

  if (loginError) {
    toast.error('Could not find account', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (RegisterError) {
    toast.error('Could not Register account, try again', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <Router>
        {auth ? <NavbarProtected /> : <NavbarUnprotected />}
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Registration} />
          <PrivateRoute>
            <PrivateRoute exact path='/Profile' component={Login} auth={auth} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default Content;
