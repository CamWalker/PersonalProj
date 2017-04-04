import React from 'react';
import SelectedProfileSpec from './selectedProfileSpec.js'

const SelectedProfile = (props) => {
  const specs = props.profile.specs.map((spec, i) => {
    let path = '';
    switch (spec.type) {
      case 'education':
        path = '../pics/education.png'
        break;
      case 'work':
        path = '../pics/education.png'
        break;
      case 'relation':
        path = '../pics/education.png'
        break;
      case 'lived':
        path = '../pics/education.png'
        break;

    }
    return <SelectedProfileSpec
      spec = {spec}
      key = {i}
      path = {path} />
  })

  return (
    <div className="selected-profile-box">
      <div className="selected-profile-container">
        <div className="selected-profile-item">

          <div className="selected-profile-pic-container">
            <img className="selected-profile-pic" src={props.profile.pic} />
          </div>

          <div className="selected-profile-name-specs">
            <div className="selected-profile-name">{props.profile.first_name} {props.profile.last_name}</div>

            <div className="selected-profile-specs">
              {specs}
            </div>
          </div>



          <div className="selected-profile-ice-breaker-box">
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                Favorite ice cream
              </div>
              <div className="selected-profile-ice-breaker-answer">
                Swirl- vanilla and chocolate chip
              </div>
            </div>
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                First job
              </div>
              <div className="selected-profile-ice-breaker-answer">
                McDonald's
              </div>
            </div>
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                Another
              </div>
              <div className="selected-profile-ice-breaker-answer">
                Another answer
              </div>
            </div>
            <div className="selected-profile-ice-breaker-item">
              <div className="selected-profile-ice-breaker-question">
                And Another
              </div>
              <div className="selected-profile-ice-breaker-answer">
                And another answer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProfile;
