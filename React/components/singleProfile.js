import React from 'react';
import SingleProfileSpec from './singleProfileSpec';

const SingleProfile = (props, onProfileSelect) => {

  //future state -- have the dates be stored in full conext so they can be sorted and the most recent can be pulled.
  let specs = [];
    const educ = props.profile.specs.filter( (specs) => { return specs.type === 'education'})
    if (educ[0] !== undefined) {
      specs.push({spec: educ[0], path: '../pics/education.png'});
    }
    const work =props.profile.specs.filter( (specs) => { return specs.type === 'work'})
    if (work[0] !== undefined) {
      specs.push({spec: work[0], path: '../pics/education.png'});
    }
    const relation =props.profile.specs.filter( (specs) => { return specs.type === 'relation'})
    if (relation[0] !== undefined) {
      specs.push({spec: relation[0], path: '../pics/education.png'});
    }
    const lived =props.profile.specs.filter( (specs) => { return specs.type === 'lived'})
    if (lived[0] !== undefined) {
      specs.push({spec: lived[0], path: '../pics/education.png'});
    }
  specs = specs.map((spec, i) => {
    return <SingleProfileSpec
      spec = {spec.spec}
      key = {i}
      path = {spec.path} />
  })





  return (
    <div onClick={() => {props.onProfileSelect(props.profile);}} className="profile-item">
      <div className="item-box">
        <div className="item-pic-container">
          <img className="item-pic" src={props.profile.pic} alt="" />
        </div>
          <div className="item-content">
            <div className="item-name">{props.profile.first_name} {props.profile.last_name}</div>
            <div className="specs">
              {specs}
            </div>
          </div>
      </div>
      <div className="ice-breaker-box">
        <div className="ice-breaker-item">
          <div className="ice-breaker-question">
            Ask me about...
          </div>
          <div className="ice-breaker-answer">
            {props.profile.gtky[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
