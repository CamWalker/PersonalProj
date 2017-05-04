import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutAction } from '../actions/action_logout.js'
import SingleProfileSpec from '../components/singleProfileSpec.js';

class ProfileOverview extends Component {


  onLogout() {
    this.props.logoutAction();
  }


  render() {
    let profile = this.props.login;

      let specs = [];
      const educ = profile.education;
      if (educ[0]) {
        specs.push({spec: educ[0], path: '../pics/education4.png'});
      } else {
        specs.push({spec: {value: 'Blank'}, path: '../pics/education4.png'});
      }
      const work = profile.work;
      if (work[0]) {
        specs.push({spec: {value: work[0].value + " at " + work[0].employer}, path: '../pics/work2.png'});
      } else {
        specs.push({spec: {value: 'Blank'}, path: '../pics/work2.png'});
      }
      const relation = profile.relation;
      if (profile.relationship_status) {
        specs.push({spec: {value: profile.relationship_status}, path: '../pics/relationship2.png'});
      } else if (relation[0]) {
        specs.push({spec: relation[0], path: '../pics/relationship2.png'});
      } else {
        specs.push({spec: {value: 'Blank'}, path: '../pics/relationship2.png'});
      }
      const lived =profile.lived;
      if (lived[0]) {
        specs.push({spec: lived[0], path: '../pics/location2.png'});
      } else {
        specs.push({spec: {value: 'Blank'}, path: '../pics/location2.png'});
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
                {profile.gtky[0] && <div className="login-ice-breaker-question">
                  Ask me about...
                </div>}
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
