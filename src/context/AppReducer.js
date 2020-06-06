import { act } from 'react-dom/test-utils';

export default (state, action) => {
  switch (action.type) {
    case `AUTHENTICATE`:
      return {
        ...state,
        auth: action.auth,
        currentUser: action.payload,
      };
  }
};
