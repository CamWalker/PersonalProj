import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, View, TextInput, Text, Image, TouchableWithoutFeedback } from 'react-native';

//components
import Header from './common/Header';
import SingleProfile from './SingleProfile';
import Nav from './Nav';
import Searchbar from './Searchbar';

//actions
import { getFeed, activate } from '../actions/action_feed';
import { getLocation } from '../actions/action_getLocation';
import { selectProfile } from '../actions/action_selectProfile';

class Feed extends Component {
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
          alert("Geolocation is not supported.");
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
          alert("Geolocation is not supported.");
      }
    }
  }



  render() {
    const profiles = this.props.profiles.temp
    const renderProfiles = profiles.map((profile) => <SingleProfile key={profile.id} profile={profile} />)
    const value = 'Search profiles';

    return (
      <View style={styles.bodyStyle} >
        <Header>
          <Searchbar />
        </Header>
        <ScrollView>
          {renderProfiles}
        </ScrollView>
        <Nav />
      </View>
    )
  }
}




const styles = {
  bodyStyle: {
    backgroundColor: '#F2EEEB',
    flex: 1,
    justifyContent: 'space-between'
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
