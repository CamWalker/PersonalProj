import React, { Component } from 'react';
import { loginAction } from '../actions/action_login.js';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import Carousel from '../components/carousel.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {signup: false};
    this.loginSwitch = this.loginSwitch.bind(this);
  }

  signUp = () => {
    const form = this.props.loginForm.loginForm;
    // if (form.email.value) {
    //   this.props.loginAction(form.email.value, form.password.value);
    // }
  }

  login = () => {
    const form = this.props.loginForm.loginForm
    if (form.email.value) {
      this.props.loginAction(form.email.value, form.password.value);
    }
  }

  loginSwitch () {
    this.setState({ signup: !this.state.signup })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { fields: { firstName, lastName, email, password }, handleSubmit } = this.props;

    if (this.props.login) {
      return (
        <Redirect to={from}/>
      )
    }

    if (this.state.signup) {
      return (
        <div className="login-page">
          <div className="login-carousel">
            <Carousel />
          </div>
          <div className="login-sign-up">
            <h3 className="login-sign-up-intro">Sign up to connect with those closest to you...literally!</h3>
            <h3 className="login-sign-up-intro">It's free.</h3>
            <button className="login-sign-up-submit" onClick={this.signUp} type="submit">Log in with Facebook</button>
            <div><br /><hr size="1px" color="#ece6e2" width="250px" /><br /></div>
            <form className="login-sign-up-form" onSubmit={handleSubmit(this.signUp)}>
              <input className="login-sign-up-field" type="text" placeholder="First Name" name="firstName" {...firstName} />
              <input className="login-sign-up-field" type="text" placeholder="Last Name" name="lastName" {...lastName} />
              <input className="login-sign-up-field" type="text" placeholder="Email" name="email" {...email} />
              <input className="login-sign-up-field" type="password" placeholder="Password" name="password" {...password} />
              <button className="login-sign-up-submit" type="submit">Sign Up</button>
            </form>
            <p>
              Have an account? <a onClick={this.loginSwitch} className="login-login-link">Log in</a>
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="login-page">
          <div className="login-carousel">
            <Carousel />
          </div>
          <div className="login-sign-up">
            <button className="login-sign-up-submit" onClick={this.signUp} type="submit">Log in with Facebook</button>
            <div><br /><hr size="1px" color="#ece6e2" width="250px" /><br /></div>
            <form className="login-sign-up-form" onSubmit={handleSubmit(this.login)}>
              <input className="login-sign-up-field" type="text" placeholder="Email" name="email" {...email} />
              <input className="login-sign-up-field" type="password" placeholder="Password" name="password" {...password} />
              <button className="login-sign-up-submit" type="submit">Log in</button>
            </form>
            <p>
              Don't have an account? <a onClick={this.loginSwitch} className="login-login-link">Sign Up</a>
            </p>
          </div>
        </div>
      )
    }

  }
}

function mapStateToProps(store) {
  return {
    login: store.login,
    loginForm: store.form
  };
}


export default reduxForm({
  form: 'loginForm',
  fields: ['firstName', 'lastName', 'email', 'password']
}, mapStateToProps, { loginAction })(Login);
