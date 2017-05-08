import { combineReducers } from 'redux';
import selectProfile from './reducer_selectProfile';
import feedReducer  from './reducer_feed';
import gtkyKEY from './reducer_gtky';
import Login from './reducer_login_logout';
import currentLocation from './reducer_location';
import {reducer as formReducer} from 'redux-form';
import popup from './reducer_popup';
import activated from './activateReducer'


const rootReducer = combineReducers({
  appActivated: activated,
  form: formReducer,
  profiles: feedReducer,
  selectedProfile: selectProfile,
  gtkyKEY: gtkyKEY,
  login: Login,
  currentLocation: currentLocation,
  popup: popup
});

export default rootReducer;
