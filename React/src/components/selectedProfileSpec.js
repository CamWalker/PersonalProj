import React from 'react';

const SelectedProfileSpec = (props) => {


  return (
    <div className="selected-profile-spec">
      <img className="selected-profile-spec-image" src={props.path} />
      <span className="selected-profile-spec-text">{props.spec.value}</span>
    </div>
  )
}


export default SelectedProfileSpec;
