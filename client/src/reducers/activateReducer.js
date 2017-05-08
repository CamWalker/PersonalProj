import { ACTIVATE } from '../actions/action_login';

export default function(state = false, action) {
  switch (action.type) {
    case ACTIVATE:
      return true
    default:
      return state;
  }
}
