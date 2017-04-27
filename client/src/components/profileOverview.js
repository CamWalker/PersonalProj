import React from 'react';
import { Link } from 'react-router-dom';
import SingleProfileSpec from './singleProfileSpec.js'

const ProfileOverview = () => {
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
      specs.push({spec: educ[0], path: '../pics/education.png'});
    }
    const work = profile.specs.work;
    if (work[0] !== undefined) {
      specs.push({spec: work[0], path: '../pics/work.png'});
    }
    const relation = profile.specs.relation;
    if (relation[0] !== undefined) {
      specs.push({spec: relation[0], path: '../pics/relationship.png'});
    }
    const lived =profile.specs.lived;
    if (lived[0] !== undefined) {
      specs.push({spec: lived[0], path: '../pics/location.png'});
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
        <Link className="account-options-box" to="/profile"><div>View/Edit Profile</div></Link>
        <div className="account-options-box">Help</div>
        <div className="account-options-box">Log Out</div>
      </div>
    </div>
  )
}

export default ProfileOverview;
