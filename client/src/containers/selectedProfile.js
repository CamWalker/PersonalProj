import React from 'react';
import SelectedProfileSpec from '../components/selectedProfileSpec.js'
import SelectedProfileGTKY from '../components/selectedProfileGTKY.js'
import { connect } from 'react-redux';


const SelectedProfile = (props) => {
  let education = "";
  let work = "";
  let relationship_status = "";
  let relation = "";
  let lived = "";
  let gtkys = "";
  if(props.selectedProfile) {
    education = props.selectedProfile.education.map((spec, i) => {
      let educSpec = {value: spec.value + " (" + spec.start + " - " + spec.end + ")"}
      return <SelectedProfileSpec
        spec={educSpec}
        key={i}
        path='../pics/education2.png' />
    });
    work = props.selectedProfile.work.map((spec, i) => {
      let workSpec = {value: spec.value + " at " + spec.employer + " (" + spec.start + " - " + spec.end + ")"}
      return <SelectedProfileSpec
        spec={workSpec}
        key={i}
        path='../pics/work.png' />
    });
    const relationSpec = {value: props.selectedProfile.relationship_status}
    relationship_status = <SelectedProfileSpec
      spec={relationSpec}
      path='../pics/relationship.png' />
    relation = props.selectedProfile.relation.map((spec, i) => {
        let type = "";
        switch (spec.value) {
          case 'Pet(s)':
            if (Number(spec.quantity) === 1) {
              type = 'Pet';
            } else {
              type = 'Pets';
            }
            break;
          case 'Child(ren)':
            if (Number(spec.quantity) === 1) {
              type = 'Child';
            } else {
              type = 'Children';
            }
            break;
          case 'Sibling(s)':
            if (Number(spec.quantity) === 1) {
              type = 'Sibling';
            } else {
              type = 'Siblings';
            }
            break;
          default:

        }
      let relationSpec = {value: spec.quantity + " " + type}
      return <SelectedProfileSpec
        spec={relationSpec}
        key={i}
        path='../pics/relationship.png' />
    });
    lived = props.selectedProfile.lived.map((spec, i) => {
      return <SelectedProfileSpec
        spec={spec}
        key={i}
        path='../pics/location.png' />
    });
    gtkys = props.selectedProfile.gtky.map((gtky, i) => {
      if (gtky) {
        return <SelectedProfileGTKY
          question={props.gtkyKEY[i]}
          answer={gtky}
          key={props.gtkyKEY[i]} />
      } else {
        return "";
      }
    });
  }



  return (
    <div id="profile-modal" className="selected-profile-box">
      {props.selectedProfile &&
      <div className="selected-profile-container">
        <div className="selected-profile-item">

          <div className="selected-profile-pic-container">
            { props.selectedProfile ? (<img className="selected-profile-pic" src={props.selectedProfile.pic} alt="" />) : (<img className="selected-profile-pic" alt="" />)}
          </div>
          <div className="selected-profile-name-specs">
            <div className="selected-profile-name">{ props.selectedProfile ? props.selectedProfile.first_name : "" } { props.selectedProfile ? props.selectedProfile.last_name : "" }</div>

            <div className="selected-profile-specs">
              { props.selectedProfile ? education ? education : "" : ""}
              { props.selectedProfile ? work ? work : "" : ""}
              { props.selectedProfile.relationship_status ? relationship_status ? relationship_status : "" : "" }
              { props.selectedProfile ? relation ? relation : "" : "" }
              { props.selectedProfile ? lived ? lived : "" : ""}
            </div>
          </div>
          <div className="selected-profile-ice-breaker-box">
            {props.selectedProfile ? gtkys : ""}
          </div>

        </div>
      </div>
      }
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
