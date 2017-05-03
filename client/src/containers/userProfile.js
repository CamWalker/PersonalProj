import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileOverview from '../components/profileOverview';
import { Link } from 'react-router-dom';



const UserProfile = (props) => {
  if (!props.login) {
    return (
      <Redirect to='/login' />
    )
  }

  const profile = props.login;

      const education = profile.specs.education.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">
              {spec.value}
            </div>
            <div className="user-spec-dates">
              {spec.start_date} - {spec.end_date}
            </div>
          </div>
        )
      });

      const work = profile.specs.work.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">{spec.title} <span className="user-at">at</span> {spec.employer}</div>
            <div className="user-spec-dates">{spec.start_date} - {spec.end_date}</div>
          </div>
        )
      });

      const relation = profile.specs.relation.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value"></div>
            <div className="user-spec-dates">{spec.quantity + " " + spec.value}</div>
          </div>
        )
      });

      const lived = profile.specs.lived.map((spec, i) => {
        return (
          <div key={i} className="user-spec">
            <div className="user-spec-value">{spec.value}</div>
          </div>
        )
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
              <Link to="/profile/edit"><button className="user-edit">EDIT</button></Link>
            </div>
            <div className="user-forms">
              <form>
                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/education2.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    {education}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/work.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    {work}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/relationship.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    <div className="user-spec">
                      <div className="user-spec-value user-relationship-status">Relationship Status:</div>
                      <div className="user-spec-dates">{profile.specs.relationship_status}</div>
                    </div>
                    {relation}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <img className="user-item-pic" src="../pics/location.png" alt="" />
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    {lived}
                  </div>
                </div>

                <div>
                  <div className="user-item-pic-container">
                    <div className="user-item-pic" ></div>
                    <hr size="1px" color="#ece6e2" />
                  </div>
                  <div className="user-spec-fields">
                    {gtky}
                  </div>
                </div>

              </form>
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
    gtkyKEY: store.gtkyKEY
  };
}

export default connect(mapStateToProps)(UserProfile);
