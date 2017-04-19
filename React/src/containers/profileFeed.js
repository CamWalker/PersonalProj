import React from 'react';
import { connect } from 'react-redux';
import SingleProfile from './singleProfile';
import { getFeed } from '../actions/action_feed';
import { bindActionCreators } from 'redux';


class ProfileFeed extends React.Component {
  componentWillMount() {
    this.props.getFeed();
  }


  // {profileItems}
  render() {
    const profiles = this.props.profiles.temp;
    let profileItems;
    if(profiles) {
      profileItems = profiles.map((profile, i) => {
        return <SingleProfile
          key = {profile.id}
          profile = {profile} />
      })
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
  return { profiles: store.profiles };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFeed: getFeed }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
