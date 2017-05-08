import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileOverview from '../containers/profileOverview';
import { Link } from 'react-router-dom';


const UserProfile = (props) => {
  if (!props.login.loggedIn) {
    return (
      <Redirect to='/login' />
    )
  }

  const profile = props.login.data;
      const education = profile.education.map((spec, i) => {
        if(spec) {
          return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">
              {spec.value}
            </div>
            <div className="user-spec-dates">
              {spec.start} - {spec.end}
            </div>
          </div>
        )} else {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value">
                Blank
              </div>
              <div className="user-spec-dates">
              </div>
            </div>
          )
        }
      });

      const work = profile.work.map((spec, i) => {
        if(spec) {
          return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">{spec.value} <span className="user-at">at</span> {spec.employer}</div>
            <div className="user-spec-dates">{spec.start} - {spec.end}</div>
          </div>
        )} else {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value">
                Blank
              </div>
              <div className="user-spec-dates">
              </div>
            </div>
          )
        }
      });

      const relation = profile.relation.map((spec, i) => {
        if(spec) {
          return (
          <div key={i} className="user-spec">
            <div className="user-spec-value"></div>
            <div className="user-spec-dates">{spec.quantity + " " + spec.value}</div>
          </div>
        )} else {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value">
                Blank
              </div>
              <div className="user-spec-dates">
              </div>
            </div>
          )
        }
      });

      const lived = profile.lived.map((spec, i) => {
        if (spec) {
          return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">{spec.value}</div>
          </div>
        )} else {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value">
                Blank
              </div>
            </div>
          )
        }
      });

      const gtky = profile.gtky.map((answer, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value gray-text">{props.gtkyKEY[i]}</div>
            <div className="user-spec-dates">{answer}</div>
          </div>
        )
      })


  return (
    <div>
      <ProfileOverview />
      <div className="user-wrapper">
        <div className="user">
          <div className="user-container">
            <div className="user-top-buttons">
              <Link to="/"><button className="user-back">BACK</button></Link>
              <Link to="/edit"><button className="user-edit">EDIT</button></Link>
            </div>
            <div className="user-forms">
                <div>
                  <h4>Name</h4>
                  <div className="user-spec-fields">
                    <div className="user-spec">
                      <div className="user-spec-value">{profile.first_name} &nbsp;&nbsp;{profile.last_name}</div>
                      <div>
                        <img className="account-pic" src={profile.pic} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/education2.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <h4>Education</h4>
                  <div className="user-spec-fields">
                    {education}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/work.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <h4>Work Experience</h4>
                  <div className="user-spec-fields">
                    {work}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/relationship.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <h4>Relationships</h4>
                  <div className="user-spec-fields">
                    {profile.relationship_status && <div className="user-spec">
                      <div className="user-spec-value user-relationship-status">Relationship Status:</div>
                      <div className="user-spec-dates">{profile.relationship_status}</div>
                    </div>}
                    {relation}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/location.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <h4>Places You Lived</h4>
                  <div className="user-spec-fields">
                    {lived}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <div className="user-item-pic" ></div>
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <h4>Optional Inputs</h4>
                  <div className="user-spec-fields">
                    {gtky}
                  </div>
                </div>

            </div>
            <div className="user-bottom-buttons">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(store) {
  return {
    login: store.login,
    gtkyKEY: store.gtkyKEY,
  };
}



export default connect(mapStateToProps)(UserProfile);
