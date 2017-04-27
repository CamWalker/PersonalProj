import { combineReducers } from 'redux';
import selectProfile from './reducer_selectProfile';
import feedReducer  from './reducer_feed';
import gtkyKEY from './reducer_gtky';
import login from './reducer_login_logout'


const rootReducer = combineReducers({
  profiles: feedReducer,
  selectedProfile: selectProfile,
  gtkyKEY: gtkyKEY,
  login: login
});

export default rootReducer;
