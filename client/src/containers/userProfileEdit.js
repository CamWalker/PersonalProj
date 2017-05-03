import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileOverview from '../components/profileOverview';
import { Link, Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';


class UserProfileEdit extends Component {
  // if (!this.props.login) {
  //   return (
  //     <Redirect to='/login' />
  //   )
  // }

  addField() {
    console.log('clicked');
  }

  save() {
    console.log('saving...');
  }

  onInputChange (event) {
    console.log(event);
  }

  render () {


    const profile = this.props.login;

        const education = profile.specs.education.map((spec, i) => {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value">
                <input name={`education${i}`} onChange={event => this.onInputChange(event.target)} className="user-spec-value-input" type="text" value={spec.value} placeholder="School" />
              </div>
              <div className="user-spec-dates">
                <input className="user-spec-dates-input" type="text" value={spec.start_date} placeholder="Start year" /> - <input className="user-spec-dates-input" type="text" value={spec.end_date} placeholder="End year" />
              </div>
            </div>
          )
        });

        const work = profile.specs.work.map((spec, i) => {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value"><input className="user-spec-value-input" type="text" value={spec.title} placeholder="Title" /> <span className="user-at">at</span> <input className="user-spec-value-input" type="text" value={spec.employer} placeholder="Employer" /></div>
              <div className="user-spec-dates"><input className="user-spec-dates-input" type="text" value={spec.start_date} placeholder="Start year" /> - <input className="user-spec-dates-input" type="text" value={spec.end_date} placeholder="End year" /></div>
            </div>
          )
        });

        const relation = profile.specs.relation.map((spec, i) => {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value"></div>
              <div>
                <select className="user-spec-value-input-relation-q" name="relations-other1" value={spec.quantity}>
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
                <select className="user-spec-value-input-relation" name="relations-other2" value={spec.value}>
                  <option name=""></option>
                  <option name="children">Child(ren)</option>
                  <option name="siblings">Sibling(s)</option>
                  <option name="pets">Pet(s)</option>
                </select>
              </div>
            </div>
          )
        });

        const lived = profile.specs.lived.map((spec, i) => {
          return (
            <div key={i} className="user-spec">
              <div className="user-spec-value">
                <input className="user-spec-value-input" type="text" value={spec.value} placeholder="Where have you lived?" />
              </div>
            </div>
          )
        });

        const gtky = profile.gtky.map((answer, i) => {
          return (
            <div key={i} className="user-spec-gtky">
              <div className="user-spec-value gray-text">{this.props.gtkyKEY[i]}</div>
              <input className="user-spec-value-input-gtky" type="text" value={answer} />
            </div>
          )
        })

        const { fields: { firstName, lastName, email, password }, handleSubmit } = this.props;


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
                      <div className="user-add-new-container" onClick={this.addField}>
                        <span className="user-add-new">+</span>
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
                      <div className="user-add-new-container" onClick={this.addField}>
                        <span className="user-add-new">+</span>
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
                      <div className="user-relationship-status">
                        <div>Relationship Status:</div>
                        <select className="user-spec-value-input" name="relationship-status" value={profile.specs.relationship_status}>
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
                      <div className="user-relationship-status">
                        <div></div>
                        <div className="user-add-new-container user-spec-relation" onClick={this.addField}>
                          <span className="user-add-new">+</span>
                        </div>
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
                      <div className="user-add-new-container" onClick={this.addField}>
                        <span className="user-add-new">+</span>
                      </div>
                      {lived}
                    </div>
                  </div>

                  <div>
                    <div className="user-item-pic-container">
                      <div className="user-item-pic" />
                      <hr size="1px" color="#ece6e2" />
                    </div>
                    <h4>Optional inputs</h4>
                    <div className="user-spec-fields">
                      {gtky}
                    </div>
                  </div>

                </form>
              </div>
              <div className="user-bottom-buttons">
                <Link to="/profile"><button className="user-save" onClick={handleSubmit(this.save)}>SAVE</button></Link>
                <button className="user-delete">DELETE PROFILE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    login: store.login,
    gtkyKEY: store.gtkyKEY
  };
}

export default reduxForm({
  form: 'loginForm',
  fields: ['firstName', 'lastName', 'email', 'password']
}, mapStateToProps)(UserProfileEdit);
