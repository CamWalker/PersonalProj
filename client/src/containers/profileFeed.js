import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SingleProfile from '../components/singleProfile';
import { getFeed } from '../actions/action_feed';
import { getLocation } from '../actions/action_getLocation';
import { selectProfile } from '../actions/action_selectProfile';

class ProfileFeed extends Component {
  constructor(props) {
    super(props);
    this.selectProfile = this.selectProfile.bind(this);
  }
  componentWillMount() {
    const getFeed = this.props.getFeed;
    const getLocation = this.props.getLocation;
    const userId = this.props.login.data.profileid;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getLocation(position.coords.latitude, position.coords.longitude);
        getFeed(position.coords.latitude, position.coords.longitude, userId);
      }, function (error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("You denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
          default:
            //good to go!
        }
      });
    } else {
        alert("Geolocation is not supported by this browser.");
    }

  }

  selectProfile(props) {
    this.props.selectProfile(props);
    this.props.showSelected();
  }

  // {profileItems}
  render() {
    const profiles = this.props.profiles.temp;
    let profileItems;
    if(profiles[0]) {
      profileItems = profiles.map((profile, i) => {
        return <SingleProfile
          key={profile.id}
          profile={profile}
          onProfileSelect={this.selectProfile}
          selectedID={this.props.profiles.selectedProfile ? this.props.profiles.selectedProfile.id : null}/>
      });
    } else {
      return (
        <div className="profile-list center">
          <img className="loader" src="../pics/GoodTurnG.png" alt=""/>
        </div>
      );
    }

    return (
      <div className="profile-list">
        {profileItems}
      </div>
    );
  }
};

function mapStateToProps(store) {
  return {
    profiles: store.profiles,
    login: store.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFeed: getFeed,
    selectProfile: selectProfile,
    getLocation: getLocation
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
