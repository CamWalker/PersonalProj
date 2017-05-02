import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleProfileSpec from './singleProfileSpec.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutAction } from '../actions/action_logout.js'

class ProfileOverview extends Component {


  onLogout() {
    console.log('here');
    console.log(this.props);
    this.props.logoutAction();
  }


  render() {
    let profile = {
      specs: {
        "education": [
          {"value": "Dev Mountain", "start_date": "2017", "end_date": "2017"},
          {"value": "Brigham Young University", "start_date": "2008", "end_date": "2014"},
          {"value": "Foothill High School", "start_date": "2004", "end_date": "2008"}
        ] ,
        "work": [
          {"value": "Operations Analyst - Goldman Sachs", "start_date": "2014", "end_date": "2017"},
          {"value": "Economics Teaching Assistant - Brigham Young University", "start_date": "2012", "end_date": "2014"}
        ] ,
        "relation": [
          {"value": "Married"},
          {"value": "1 child"},
          {"value": "4 siblings"}
        ],
        "lived": [
          {"value": "Salt Lake City, UT, USA"},
          {"value": "Provo, UT, USA"},
          {"value": "Rio de Janeiro, Brazil"},
          {"value": "Henderson, NV, USA"}
        ]
      },
      gtky: [
        "Building this website/app",
        "",
        "",
        ""
      ]};


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
          Welcome, Cameron!
        </div>
        <div className="login-summary">
          <div className="account-pic-container">
            <img className="account-pic" src="../pics/IMG_0759.JPG" alt="" />
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
        <div className="account-options-box">Help</div>
        <a className="account-options-box" onClick={() => this.onLogout()}><div >Log Out</div></a>
      </div>
    </div>
  )
}}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutAction }, dispatch);
}


export default connect(null, mapDispatchToProps)(ProfileOverview);
