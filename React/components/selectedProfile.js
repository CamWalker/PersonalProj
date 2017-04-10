import React from 'react';
import SelectedProfileSpec from './selectedProfileSpec.js'
import SelectedProfileGTKY from './selectedProfileGTKY.js'


const SelectedProfile = (props) => {
  const education = props.profile.specs.education.map((spec, i) => {
    return <SelectedProfileSpec
      spec = {spec}
      key = {i}
      path = '../pics/education.png' />
  })
  const work = props.profile.specs.work.map((spec, i) => {
    return <SelectedProfileSpec
      spec = {spec}
      key = {i}
      path = '../pics/work.png' />
  })
  const relation = props.profile.specs.relation.map((spec, i) => {
    return <SelectedProfileSpec
      spec = {spec}
      key = {i}
      path = '../pics/relationship.png' />
  })
  const lived = props.profile.specs.lived.map((spec, i) => {
    return <SelectedProfileSpec
      spec = {spec}
      key = {i}
      path = '../pics/location.png' />
  })



  const gtkys = props.profile.gtky.map((gtky, i) => {
    if (gtky) {
      return <SelectedProfileGTKY
        question = {props.gtkyKEY[i]}
        answer = {gtky}
        key = {i} />
    }
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
              {education}
              {work}
              {relation}
              {lived}
            </div>
          </div>
          <div className="selected-profile-ice-breaker-box">
            {gtkys}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProfile;
