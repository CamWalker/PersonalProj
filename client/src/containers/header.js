import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/action_login.js';
import { bindActionCreators } from 'redux';


class Header extends Component {
  login = (props) => {
    this.props.loginAction('email', 'password');
  }
  

  render () {
    return (
      <header>
        <div className="left-nav-items">
        </div>
        <div className="logo">
          <img className="logo-G" src="../pics/GTLogo4.png" alt="" />
        </div>
        <div className="right-nav">
          {!this.props.login &&
            <div className="login-header">
              <form>
                <input className="header-login-field" type="text" placeholder="Email" name="email" />
                <input className="header-login-field" type="text" placeholder="Password" name="password" />
                <button className="header-login-submit" type="submit" onClick={this.login} >Log in</button>
              </form>
            </div>
            }
        </div>
      </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
