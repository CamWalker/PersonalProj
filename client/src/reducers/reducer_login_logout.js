import { LOGIN } from '../actions/action_login.js';
import { LOGOUT } from '../actions/action_login.js';
import { UPDATE_INFO } from '../actions/action_updateInfo.js'
import { DELETE_ACCOUNT } from '../actions/action_deleteAccount.js'
import { LOGIN_ERROR } from '../actions/action_login.js';
import { LOGIN_ACTION } from '../actions/action_login.js';

const INITIAL_STATE = {
  loggedIn: false,
  data: {},
  error: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, error: '' };
    case LOGIN:
      if (action.payload.message !== "Request failed with status code 403") {
        return { ...state, loggedIn: true, data: action.payload.data };
      }
      break;
    case LOGOUT:
      return { ...state, loggedIn: false };
    case LOGIN_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_INFO:
      return { ...state, data: action.payload.data };
    case DELETE_ACCOUNT:
      console.log(action.payload);
      return { ...state, loggedIn: false, data: action.payload };
    default:
      return state;
  }
}
