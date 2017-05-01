import React, { Component } from 'react';
import { loginAction } from '../actions/action_login.js';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from '../components/carousel.js';

class Login extends Component {


  login = (props) => {
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
      <div className="login-page">
        <div className="login-carousel">
          <Carousel />
        </div>
        <div className="login-sign-up">
          <h3 className="login-sign-up-intro">Sign up to connect with those closest to you...literally!</h3>
          <h3 className="login-sign-up-intro">It's free.</h3>
          <button className="login-sign-up-submit" onClick={this.login} type="submit">Log in with Facebook</button>
          <br /><hr size="1px" color="#ece6e2" width="250px" /><br />
          <form className="login-sign-up-form">
            <input className="login-sign-up-field" type="text" placeholder="First Name" name="firstName" />
            <input className="login-sign-up-field" type="text" placeholder="Last Name" name="lastName" />
            <input className="login-sign-up-field" type="text" placeholder="Email" name="email" />
            <input className="login-sign-up-field" type="text" placeholder="Password" name="password" />
            <button className="login-sign-up-submit" onClick={this.login} type="submit">Sign Up</button>
          </form>
        </div>
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
  return bindActionCreators( {
    loginAction: loginAction
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
