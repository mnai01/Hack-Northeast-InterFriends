import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  auth: false,
  currentUser: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function login(user, pass) {
    console.log('in global');
    const userdata = null;
    const URL = 'https://far-friends.herokuapp.com/api/users';
    const data = { username: user, password: pass };
    axios
      .post(URL, data)
      .then((res) => {
        userdata = res.data;
        dispatch({
          type: 'AUTHENTICATE',
          auth: true,
          payload: userdata,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function register(user, pass) {
    console.log('in global');
    const userdata = null;
    const URL = 'https://far-friends.herokuapp.com/api/users';
    const data = { username: user, password: pass };
    axios
      .post(URL, data)
      .then((res) => {
        userdata = res.data;
        dispatch({
          type: 'AUTHENTICATE',
          auth: true,
          payload: userdata,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        auth: state.auth,
        login,
        //function here
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
