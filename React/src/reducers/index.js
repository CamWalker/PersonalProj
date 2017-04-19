import { combineReducers } from 'redux';
// import searchReducer from './reducer_search';
import feedReducer  from './reducer_feed.js';

var gtkyKEY = ['Ask me about...', "I'm too good for...", "My dream is...", 'Never interrupt me when...', ''];


const rootReducer = combineReducers({
  profiles: feedReducer
});

export default rootReducer;
