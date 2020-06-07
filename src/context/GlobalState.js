import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  auth: false,
  token: false,
  loginError: false,
  RegisterError: false,
  RecentlyOnline: [],
  RecentlyJoined: [],
  LandingPageLoaded: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function login(username, password) {
    let token = false;
    const URL = 'https://hack-ne.herokuapp.com/login';
    const data = { username, password };
    axios
      .post(URL, data)
      .then((res) => {
        token = res;
        dispatch({
          type: 'POST-AUTHENTICATE',
          auth: true,
          loginError: false,
          payload: token,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(token);

        console.log('in error');
        dispatch({
          type: 'POST-AUTHENTICATE',
          auth: false,
          loginError: true,
          payload: token,
        });
        // here to show the api didnt find any user or error accorded
      });

    // TEST REMOVE WHEN REAL API READY
    // dispatch({
    //   type: 'AUTHENTICATE',
    //   auth: true,
    // });
  }

  function register(
    username,
    password,
    firstname,
    lastname,
    dob,
    email,
    sex,
    nativelanguage,
    country
  ) {
    let token = false;
    const URL = 'https://hack-ne.herokuapp.com/auth/signup';
    const data = {
      username,
      password,
      first_name: firstname,
      last_name: lastname,
      dob,
      // email,
      // sex,
      // nativelanguage,
      // country,
    };
    axios
      .post(URL, data)
      .then((res) => {
        token = res.data.token; // not yet implemented
        console.log(res);
        dispatch({
          type: 'POST-REGISTER',
          auth: true,
          payload: token,
          RegisterError: false,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log('in error');
        dispatch({
          type: 'POST-REGISTER',
          auth: false,
          RegisterError: true,
          payload: token,
        });
      });
  }

  function getLandingPageInfo() {
    const URL = 'https://hack-ne.herokuapp.com/api';
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'GET-LANDING-INFO',
          payload: res.data,
          loaded: true,
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <GlobalContext.Provider
      value={{
        auth: state.auth,
        loginError: state.loginError,
        RegisterError: state.RegisterError,
        RecentlyOnline: state.RecentlyOnline,
        RecentlyJoined: state.RecentlyJoined,
        LandingPageLoaded: state.LandingPageLoaded,
        login,
        register,
        getLandingPageInfo,

        //function here
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
