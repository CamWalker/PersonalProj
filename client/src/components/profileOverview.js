import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleProfileSpec from './singleProfileSpec.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutAction } from '../actions/action_logout.js'

class ProfileOverview extends Component {


  onLogout() {
    this.props.logoutAction();
  }


  render() {
    let profile = this.props.login;

      let specs = [];
      const educ = profile.specs.education;
      if (educ[0] !== undefined) {
        specs.push({spec: educ[0], path: '../pics/education4.png'});
      }
      const work = profile.specs.work;
      if (work[0] !== undefined) {
        specs.push({spec: work[0], path: '../pics/work2.png'});
      }
      const relation = profile.specs.relation;
      if (relation[0] !== undefined) {
        specs.push({spec: relation[0], path: '../pics/relationship2.png'});
      }
      const lived =profile.specs.lived;
      if (lived[0] !== undefined) {
        specs.push({spec: lived[0], path: '../pics/location2.png'});
      }
      specs = specs.map((spec, i) => {
        return <SingleProfileSpec
          spec={spec.spec}
          key={i}
          path={spec.path} />
      });



  return (
    <div className="left-column">
      <div>
        <div className="account-greeting-text">
          Welcome, {profile.first_name}!
        </div>
        <div className="login-summary">
          <div className="account-pic-container">
            <img className="account-pic" src={profile.pic} alt="" />
          </div>
          <div className="login-profile-item">
            <div className="item-box">
              <div className="item-content">
                <div className="item-name"><span className="item-name-names"></span><span className="item-distance"></span></div>
                <div className="login-specs">
                  {specs}
                </div>
              </div>
            </div>
            <div className="ice-breaker-box">
              <div className="ice-breaker-item">
                <div className="login-ice-breaker-question">
                  Ask me about...
                </div>
                <div className="login-ice-breaker-answer">
                  {profile.gtky[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="account-options">
        <Link className="account-options-box" to="/profile"><div>Profile</div></Link>
        <hr />
        <a className="account-options-box" onClick={() => this.onLogout()}><div >Log Out</div></a>
      </div>
    </div>
  )
}}

function mapStateToProps(store) {
  return {
    login: store.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutAction }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileOverview);
