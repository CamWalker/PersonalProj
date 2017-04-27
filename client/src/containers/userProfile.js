import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileOverview from '../components/profileOverview';

const UserProfile = (props) => {
  if (!props.login) {
    return (
      <Redirect to='/login' />
    )
  }

  return (
    <div>
      <ProfileOverview />
    </div>
  )
}

function mapStateToProps(store) {
  return {
    login: store.login
  };
}

export default connect(mapStateToProps)(UserProfile);
