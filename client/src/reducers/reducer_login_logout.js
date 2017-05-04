import { LOGIN } from '../actions/action_login.js';
import { LOGOUT } from '../actions/action_logout.js';
import { UPDATE_INFO } from '../actions/action_updateInfo.js'
import { DELETE_ACCOUNT } from '../actions/action_deleteAccount.js'

export default function(state = false, action) {
  switch (action.type) {
    case LOGIN:
      if (action.payload.message !== "Request failed with status code 403") {
        return action.payload.data;
      }
      break;
    case LOGOUT:
      return false;
    case UPDATE_INFO:
      return action.payload.data;
    case DELETE_ACCOUNT:
      return false;
    default:
      return state;
  }
}
