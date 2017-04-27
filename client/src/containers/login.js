import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction } from '../actions/action_login.js';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

  login = () => {
    this.props.loginAction('email', 'password');
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.props.login) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    login: store.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
