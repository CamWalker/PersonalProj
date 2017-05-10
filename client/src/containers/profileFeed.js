import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SingleProfile from '../components/singleProfile';
import { getFeed, activate } from '../actions/action_feed';
import { getLocation } from '../actions/action_getLocation';
import { selectProfile } from '../actions/action_selectProfile';

class ProfileFeed extends Component {
  constructor(props) {
    super(props);
    this.selectProfile = this.selectProfile.bind(this);
  }
  componentWillMount() {
    if(!this.props.appActivated.feed) {
      const getFeed = this.props.getFeed;
      const getLocation = this.props.getLocation;
      const userId = this.props.login.data.profileid;
      const activate = this.props.activate
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          getLocation(position.coords.latitude, position.coords.longitude);
          getFeed(position.coords.latitude, position.coords.longitude, userId);
          activate();
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
  }

  componentDidUpdate() {
    if(!this.props.appActivated.feed) {
      const getFeed = this.props.getFeed;
      const getLocation = this.props.getLocation;
      const userId = this.props.login.data.profileid;
      const activate = this.props.activate
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          getLocation(position.coords.latitude, position.coords.longitude);
          getFeed(position.coords.latitude, position.coords.longitude, userId);
          activate();
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
  }

  selectProfile(props) {
    this.props.selectProfile(props);
    this.props.showSelected();
  }

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
    login: store.login,
    appActivated: store.appActivated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFeed: getFeed,
    selectProfile: selectProfile,
    getLocation: getLocation,
    activate: activate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
