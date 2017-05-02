import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers/index.js';
import App from './containers/App.js';
import Login from './containers/login.js';
import UserProfile from './containers/userProfile.js';
import Header from './containers/header.js';
import UserProfileEdit from './containers/userProfileEdit.js';


const middleware = applyMiddleware(ReduxPromise);
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <main>
          <Header />
          <div className="below-nav">
            <Route path='/' exact={true} component={App} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={UserProfile} />
            <Route path='/profile/edit' component={UserProfileEdit} />
        </div>
      </main>
    </Router>
  </Provider>
  , document.getElementById('app')
);
