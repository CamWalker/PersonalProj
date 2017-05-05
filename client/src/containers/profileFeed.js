import React from 'react';
import { connect } from 'react-redux';
import SingleProfile from '../components/singleProfile';
import { getFeed } from '../actions/action_feed';
import { getLocation } from '../actions/action_getLocation';
import { bindActionCreators } from 'redux';
import { selectProfile } from '../actions/action_selectProfile';

class ProfileFeed extends React.Component {
  constructor(props) {
    super(props);
    this.selectProfile = this.selectProfile.bind(this);
  }
  componentWillMount() {
    const getFeed = this.props.getFeed;
    const getLocation = this.props.getLocation;
    const userId = this.props.login.profileid;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        getLocation(position.coords.latitude, position.coords.longitude);
        getFeed(position.coords.latitude, position.coords.longitude, userId);
      }, function (error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
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
    if(profiles) {
      profileItems = profiles.map((profile, i) => {
        return <SingleProfile
          key={profile.id}
          profile={profile}
          onProfileSelect={this.selectProfile}
          selectedID={this.props.selectedProfile ? this.props.selectedProfile.id : null}/>
      });
    } else {
      profileItems = "";
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
    selectedProfile: store.selectedProfile,
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
