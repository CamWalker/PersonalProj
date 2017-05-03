import { LOGIN } from '../actions/action_login.js';
import { LOGOUT } from '../actions/action_logout.js';

export default function(state = false, action) {
  switch (action.type) {
    case LOGIN:
      if (action.payload.message !== "Request failed with status code 403") {
        return action.payload.data;
      } else {
        return false;
      }

    case LOGOUT:
      return false;
    default:
      return state;
  }
}
