import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/LoginPage';
import Feed from './components/Feed';
import SelectedProfile from './components/SelectedProfile';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" hideNavBar>
        <Scene key="login" component={Login} title="Please Login" />
      </Scene>

      <Scene key="main" hideNavBar>
        <Scene key="feed" component={Feed} title="Feed" />
        <Scene key="selectedProfile" component={SelectedProfile} title="Selected Profile" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
