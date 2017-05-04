import { SELECT_PROFILE } from '../actions/action_selectProfile'
import { LOGOUT } from '../actions/action_logout.js';
import { DELETE_ACCOUNT } from '../actions/action_deleteAccount.js'

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_PROFILE:
      return action.payload;
    case LOGOUT:
      return null;
    case DELETE_ACCOUNT:
      return null;
    default:
      return state;
  }
}
