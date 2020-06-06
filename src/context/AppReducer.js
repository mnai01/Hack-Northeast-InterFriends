import { act } from 'react-dom/test-utils';

export default (state, action) => {
  switch (action.type) {
    case `POST-AUTHENTICATE`:
      return {
        ...state,
        auth: action.auth,
        loginError: action.loginError,
        currentUser: action.payload,
      };
    case `POST-REGISTER`:
      return {
        ...state,
        RegisterError: action.RegisterError,
        auth: action.auth,
        currentUser: action.payload,
      };
    // case `POST-LOGIN-ERROR`:
    //   return { ...state, loginError: action.loginError, auth: action.auth };
    case `GET-RECENTLY-LOGGED-ON`:
      return { ...state, loginError: action.loginError, auth: action.auth };
  }
};
