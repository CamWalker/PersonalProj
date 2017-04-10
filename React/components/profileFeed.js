import React from 'react';
import SingleProfile from './singleProfile';

const ProfileFeed = (props) => {
  const profileItems = props.profiles.map((profile, i) => {
    return <SingleProfile
      key = {i}
      profile = {profile}
      gtkyKEY = {props.gtkyKEY}
      onProfileSelect={props.onProfileSelect}
      selectedID={props.selectedID} />
  });


  // {profileItems}
  return (
    <div className="profile-list">
      {profileItems}
    </div>
  );

};

export default ProfileFeed;
