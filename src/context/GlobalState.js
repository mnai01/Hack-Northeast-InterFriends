import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  auth: false,
  currentUser: {},
  loginError: false,
  RegisterError: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function login(username, password) {
    console.log('in global');
    const userdata = {};
    const URL = 'https://sdfdfdp.com/api/users';
    const data = { username, password };
    axios
      .post(URL, data)
      .then((res) => {
        console.log('in then');
        userdata = res.data;
        dispatch({
          type: 'POST-AUTHENTICATE',
          auth: true,
          loginError: false,
          payload: userdata,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log('in error');
        dispatch({
          type: 'POST-AUTHENTICATE',
          auth: false,
          loginError: true,
          payload: userdata,
        });
        // here to show the api didnt find any user or error accorded
        return true;
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
    email,
    DOB,
    sex,
    nativelanguage,
    country
  ) {
    console.log('in global');
    const userdata = {};
    const URL = 'https://asdsdasdsadasd.com/api/users';
    const data = {
      username,
      password,
      firstname,
      lastname,
      email,
      DOB,
      sex,
      nativelanguage,
      country,
    };
    axios
      .post(URL, data)
      .then((res) => {
        userdata = res.data;
        dispatch({
          type: 'POST-REGISTER',
          auth: true,
          payload: userdata,
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
          payload: userdata,
        });
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        auth: state.auth,
        loginError: state.loginError,
        RegisterError: state.RegisterError,
        login,
        register,
        //function here
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
