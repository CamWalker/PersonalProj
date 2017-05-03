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

  showSelected() {
    document.getElementById("profile-modal2").classList.toggle("show-selected");
    document.getElementById("profile-modal").classList.toggle("show-selected");
  }

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
          <div id="profile-modal2" className="modal small-mobile-view">
            <div className="modal-content">
              <div className="close-container" onClick={this.showSelected}>
                <span className="close">&times;</span>
              </div>
              <SelectedProfile />
            </div>
          </div>
          <div className="feed">
            <div className="gradient-back"></div>
            <Searchbar />
            <ProfileFeed showSelected={this.showSelected} />
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
