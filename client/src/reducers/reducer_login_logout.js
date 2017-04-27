import { LOGIN } from '../actions/action_login.js';
import { LOGOUT } from '../actions/action_logout.js';

export default function(state = false, action) {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
}
