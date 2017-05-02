import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileOverview from '../components/profileOverview';
import { Link } from 'react-router-dom';



const UserProfileEdit = (props) => {
  // if (!props.login) {
  //   return (
  //     <Redirect to='/login' />
  //   )
  // }

  let profile = {
    specs: {
      "education": [
        {"value": "Dev Mountain", "start_date": "2017", "end_date": "2017"},
        {"value": "Brigham Young University", "start_date": "2008", "end_date": "2014"},
        {"value": "Foothill High School", "start_date": "2004", "end_date": "2008"}
      ] ,
      "work": [
        {"title": "Operations Analyst", "employer": "Goldman Sachs", "start_date": "2014", "end_date": "2017"},
        {"title": "Economics Teaching Assistant", "employer": "Brigham Young University", "start_date": "2012", "end_date": "2014"}
      ] ,
      "relationship_status": "Married",
      "relation": [
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

      const education = profile.specs.education.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">
              <input type="text" value={spec.value} />
            </div>
            <div className="user-spec-dates">
              <input type="text" value={spec.start_date} /> - <input type="text" value={spec.end_date} />
            </div>
          </div>
        )
      });

      const work = profile.specs.work.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value"><input type="text" value={spec.title} /> at <input type="text" value={spec.employer} /></div>
            <div className="user-spec-dates"><input type="text" value={spec.start_date} /> - <input type="text" value={spec.end_date} /></div>
          </div>
        )
      });

      const relation = profile.specs.relation.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value"></div>
            <div className="user-spec-dates">
              <input type="text" value={spec.value} />
            </div>
          </div>
        )
      });

      const lived = profile.specs.lived.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">
              <input type="text" value={spec.value} />
            </div>
          </div>
        )
      });


  return (
    <div>
      <ProfileOverview />
      <div className="user-wrapper">
        <div className="user">
          <div className="user-container">
            <div className="user-top-buttons">
              <Link to="/profile"><button className="user-back">CANCEL</button></Link>
            </div>
            <div className="user-forms">
              <form>
                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/education2.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    <div>
                      <input type="text" placeholder="School"/>
                      <input type="text" placeholder="Start year" />
                      <input type="text" placeholder="End year" />
                    </div>
                    {education}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/work.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    <div>
                      <input type="text" placeholder="Title" />
                      <input type="text" placeholder="Employer" />
                      <input type="text" placeholder="Start year" />
                      <input type="text" placeholder="End year" />
                    </div>
                    {work}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/relationship.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    <div>
                      Relationship Status:
                      <select name="relationship-status" value={profile.specs.relationship_status}>
                        <option name=""></option>
                        <option name="Single">Single</option>
                        <option name="In a relationship">In a relationship</option>
                        <option name="Engaged">Engaged</option>
                        <option name="Married">Married</option>
                        <option name="It's complicated">It's complicated</option>
                        <option name="Separated">Separated</option>
                        <option name="Divorced">Divorced</option>
                        <option name="Widowed">Widowed</option>
                      </select>
                    </div>
                    <div>
                      <select name="relations-other1">
                        <option name=""></option>
                        <option name="1">1</option>
                        <option name="2">2</option>
                        <option name="3">3</option>
                        <option name="4">4</option>
                        <option name="5">5</option>
                        <option name="6">6</option>
                        <option name="7">7</option>
                        <option name="8">8</option>
                        <option name="9">9</option>
                        <option name="10+">10+</option>
                      </select>
                      <select name="relations-other2">
                        <option name=""></option>
                        <option name="Children">Child(ren)</option>
                        <option name="Siblings">Sibling(s)</option>
                        <option name="Pets">Pet(s)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/location.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    <div>
                      <input type="text" placeholder="Where have you lived?" />
                    </div>
                    {lived}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <div className="user-item-pic" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    <div className="user-spec-gtky">
                      <input type="text" placeholder="GTKY" />
                      <input type="text" placeholder="GTKY" />
                      <input type="text" placeholder="GTKY" />
                      <input type="text" placeholder="GTKY" />
                    </div>
                  </div>
                </div>

              </form>
            </div>
            <div className="user-bottom-buttons">
              <Link to="/profile"><button className="user-save">SAVE</button></Link>
              <button className="user-delete">DELETE PROFILE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(store) {
  return {
    login: store.login
  };
}

export default connect(mapStateToProps)(UserProfileEdit);
