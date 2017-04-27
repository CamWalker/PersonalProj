// FACEBOOK = me?fields=education,work,relationship_status,hometown,location,languages



import React from 'react';
import ProfileFeed from '../containers/profileFeed.js';
import Searchbar from '../containers/searchbar.js';
import SelectedProfile from '../containers/selectedProfile';
import ProfileOverview from '../components/profileOverview.js';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutAction } from '../actions/action_login.js';


class App extends React.Component {
render() {
    if (!this.props.login) {
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <div>
        <ProfileOverview />
        <div className="right-column">
          <div className="feed">
            <div className="gradient-back"></div>
            <Searchbar />
            <ProfileFeed />
          </div>
          <SelectedProfile />
        </div>
      </div>
    );
  }
};

function mapStateToProps(store) {
  return {
    login: store.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
