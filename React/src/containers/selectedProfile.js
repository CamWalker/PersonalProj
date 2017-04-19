import React from 'react';
import SelectedProfileSpec from '../components/selectedProfileSpec.js'
import SelectedProfileGTKY from '../components/selectedProfileGTKY.js'
import { connect } from 'react-redux';


const SelectedProfile = (props) => {
  if(props.selectedProfile) {
    const education = props.selectedProfile.specs.education.map((spec, i) => {
      return <SelectedProfileSpec
        spec = {spec}
        key = {i}
        path = '../pics/education.png' />
    });
    console.log(education);
    const work = props.selectedProfile.specs.work.map((spec, i) => {
      return <SelectedProfileSpec
        spec = {spec}
        key = {i}
        path = '../pics/work.png' />
    });
    const relation = props.selectedProfile.specs.relation.map((spec, i) => {
      return <SelectedProfileSpec
        spec = {spec}
        key = {i}
        path = '../pics/relationship.png' />
    });
    const lived = props.selectedProfile.specs.lived.map((spec, i) => {
      return <SelectedProfileSpec
        spec = {spec}
        key = {i}
        path = '../pics/location.png' />
    });
    const gtkys = props.selectedProfile.gtky.map((gtky, i) => {
      if (gtky) {
        return <SelectedProfileGTKY
          question = {props.gtkyKEY[i]}
          answer = {gtky}
          key = {props.gtkyKEY[i]} />
      }
    });
  }









  return (
    <div className="selected-profile-box">
      <div className="selected-profile-container">
        <div className="selected-profile-item">

          <div className="selected-profile-pic-container">
            { props.selectedProfile ? (<img className="selected-profile-pic" src={props.selectedProfile.pic} />) : (<img className="selected-profile-pic" />)}
          </div>
          <div className="selected-profile-name-specs">
            <div className="selected-profile-name">{ props.selectedProfile ? props.selectedProfile.first_name : "" } { props.selectedProfile ? props.selectedProfile.last_name : "" }</div>

            <div className="selected-profile-specs">
              {props.selectedProfile ? education : ""}
              {props.selectedProfile ? work : ""}
              {props.selectedProfile ? relation : ""}
              {props.selectedProfile ? lived : ""}
            </div>
          </div>
          <div className="selected-profile-ice-breaker-box">
            {props.selectedProfile ? gtkys : ""}
          </div>

        </div>
      </div>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    selectedProfile: store.selectedProfile,
    gtkyKEY: store.gtkyKEY,
  };
};

export default connect(mapStateToProps)(SelectedProfile);