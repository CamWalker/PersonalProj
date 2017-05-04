import React, { Component } from 'react';
import { loginAction, signUpAction } from '../actions/action_login.js';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { loginValidate } from './validate'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {signup: false};
    this.loginSwitch = this.loginSwitch.bind(this);
  }

  signUp = (values) => {
    console.log(values);
    this.props.signUpAction(values);
  }

  login = (values) => {
    if (values) {
      this.props.loginAction(values.email, values.password);
    }
  }

  loginSwitch () {
    this.setState({ signup: !this.state.signup })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    const renderField = ({ className, placeholder, input, type, meta: { touched, error } }) => (
        <div>
          <input {...input} placeholder={placeholder} type={type} className={className} />
          {touched && (error && <span>{error}</span>)}
        </div>
    )

    const { handleSubmit } = this.props;
    if (this.props.login) {
      return (
        <Redirect to={from}/>
      )
    }

    if (this.state.signup) {
      return (
        <div className="login-page">
          <div className="login-carousel">
            <div className="login-carousel-inner">
              <img src="../pics/Carousel/7.jpg" alt="" />
            </div>
          </div>
          <div className="login-sign-up">
            <h3 className="login-sign-up-intro">Sign up to connect with those closest to you...literally!</h3>
            <h3 className="login-sign-up-intro">It's free.</h3>
            <button className="login-sign-up-submit" onClick={this.signUp} type="submit">Log in with Facebook</button>
            <div><br /><hr size="1px" color="#ece6e2" width="250px" /><br /></div>
            <form className="login-sign-up-form" onSubmit={handleSubmit(this.signUp)}>
              <Field component="input" className="login-sign-up-field" type="text" placeholder="First Name" name="firstName"  />
              <Field component="input" className="login-sign-up-field" type="text" placeholder="Last Name" name="lastName" />
              <Field component="input" className="login-sign-up-field" type="text" placeholder="Email" name="email" />
              <Field component="input" className="login-sign-up-field" type="password" placeholder="Password" name="password" />
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
            <div className="login-carousel-inner">
              <img src="../pics/Carousel/7.jpg" alt="" />
            </div>
          </div>
          <div className="login-sign-up">
            <button className="login-sign-up-submit" onClick={this.signUp} type="submit">Log in with Facebook</button>
            <div><br /><hr size="1px" color="#ece6e2" width="250px" /><br /></div>
            <form className="login-sign-up-form" onSubmit={handleSubmit(this.login)}>
              <Field className="login-sign-up-field" type="email" placeholder="Email" name="email" component="input" />
              <Field className="login-sign-up-field" type="password" placeholder="Password" name="password" component="input" />
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

  // fields: ['firstName', 'lastName', 'email', 'password']
Login = reduxForm({
  form: 'loginForm',
  loginValidate
})(Login);

Login = connect(mapStateToProps, { loginAction, signUpAction })(Login);

export default Login;
