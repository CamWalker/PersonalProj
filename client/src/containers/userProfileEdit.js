import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { Field, FieldArray, reduxForm } from 'redux-form';
import AvatarEditor from 'react-avatar-editor'
import ProfileOverview from '../containers/profileOverview';
import { updateInfo } from '../actions/action_updateInfo.js';
import { deleteAccount } from '../actions/action_deleteAccount.js';
import validate from './validate';

class UserProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '', scale: 1 };
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleScale = (e) => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }

  setEditorRef = (editor) => {
    this.editor = editor;
  }

  delete () {
    this.props.deleteAccount(this.props.login.data.profileid);
  }

  save(values) {
    const canvasScaled = this.editor.getImageScaledToCanvas().toDataURL();

    let imageExtension = canvasScaled.split(';')[0].split('/');
    imageExtension = imageExtension[imageExtension.length - 1];

    const newImage = {
      imageName: 'profile' + values.profileid,
      imageBody: canvasScaled,
      imageExtension: imageExtension,
      userEmail: values.email
    }
    this.props.updateInfo(values, newImage);
  }

  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to='/login' />
      )
    } else if (this.props.login.edited) {
      return (
        <Redirect to='/profile' />
      )
    }

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<AvatarEditor
        ref={this.setEditorRef}
        image={imagePreviewUrl}
        scale={parseFloat(this.state.scale)}
        width={130}
        height={130}
        border={0}
        borderRadius={100}
        color={[255, 255, 255, 0.6]} // RGBA
        rotate={0}
        onImageChange={this._handleImageChange}
      />);
    } else {
      $imagePreview = (<AvatarEditor
        ref={this.setEditorRef}
        image={this.props.login.data.pic}
        scale={parseFloat(this.state.scale)}
        width={130}
        height={130}
        border={0}
        borderRadius={100}
        color={[255, 255, 255, 0.6]} // RGBA
        rotate={0}
        onImageChange={this._handleImageChange}
      />);
    }

    const education = ({ fields, meta: { touched, error } }) => (
      <div className="user-spec-fields">
        <div className="user-add-new-container" onClick={() => fields.unshift()}>
          <span className="user-add-new">+</span>
        </div>
        {fields.map((value, i) =>
          <div key={i} className="user-spec">
            <div className="user-spec-value">
              <div className="user-minus-new-container" onClick={() => fields.remove(i)}>
                <span className="user-minus-new">-</span>
              </div>
              { (i !== fields.length - 1 && <div className="user-down-new-container" onClick={() => fields.move(i, i+1)}>
                <span className="user-down-new">&darr;</span>
              </div>) || <div className="user-empty-new-container"><span className="user-empty-new"></span></div>}
              <Field name={`${value}.value`} component="input" className="user-spec-value-input" type="text" placeholder="School" />
            </div>
            <div className="user-spec-dates">
              <Field name={`${value}.start`} component="input" className="user-spec-dates-input" type="text" placeholder="Start year" /> - <Field name={`${value}.end`} component="input" className="user-spec-dates-input" type="text" placeholder="End year" />
            </div>
            {error && <div>error</div>}
          </div>
        )}
      </div>
    )


    const work = ({ fields, meta: { touched, error } }) => (
      <div className="user-spec-fields">
        <div className="user-add-new-container" onClick={() => fields.unshift()}>
          <span className="user-add-new">+</span>
        </div>
        {fields.map((value, i) =>
          <div key={i} className="user-spec">
            <div className="user-spec-value">
              <div className="user-minus-new-container" onClick={() => fields.remove(i)}>
                <span className="user-minus-new">-</span>
              </div>
              { (i !== fields.length - 1 && <div className="user-down-new-container" onClick={() => fields.move(i, i+1)}>
                <span className="user-down-new">&darr;</span>
              </div>) || <div className="user-empty-new-container"><span className="user-empty-new"></span></div>}
              <Field name={`${value}.value`} component="input" className="user-spec-value-input" type="text" placeholder="Title" />
              <span className="user-at">at</span>
              <Field name={`${value}.employer`} component="input" className="user-spec-value-input" type="text" placeholder="Employer" />
            </div>
            <div className="user-spec-dates">
              <Field name={`${value}.start`} component="input" className="user-spec-dates-input" type="text" placeholder="Start year" /> - <Field name={`${value}.end`} component="input" className="user-spec-dates-input" type="text" placeholder="End year" />
            </div>
          </div>
        )}
      </div>
    )

    const quantity = ['0','1','2','3','4','5','6','7','8','9','10+'];
    const relations = ['Child(ren)', 'Sibling(s)', 'Pet(s)'];
    const relationships = ['Single', 'In a relationship', 'Engaged', 'Married', "It's complicated", 'Separated', 'Divorced', 'Widowed']
    const relation = ({ fields, meta: { touched, error } }) => (
      <div>
        <div className="user-spec-fields">
          <div className="user-relationship-status">
            <div>Relationship Status:</div>
            <Field className="user-spec-value-input" name="relationship_status" component="select">
              <option value=""></option>
              {relationships.map( relationshipOption =>
                <option value={relationshipOption} key={relationshipOption}>{relationshipOption}</option>
              )}
            </Field>
          </div>
        </div>
        <div className="user-spec-fields">
          <div className="user-add-new-container" onClick={() => fields.unshift()}>
            <span className="user-add-new">+</span>
          </div>
          {fields.map((value, i) =>
            <div key={i} className="user-spec">
              <div className="user-spec-value">
                <div className="user-minus-new-container" onClick={() => fields.remove(i)}>
                  <span className="user-minus-new">-</span>
                </div>
                { (i !== fields.length - 1 && <div className="user-down-new-container" onClick={() => fields.move(i, i+1)}>
                  <span className="user-down-new">&darr;</span>
                </div>) || <div className="user-empty-new-container"><span className="user-empty-new"></span></div>}
                <Field className="user-spec-value-input-relation-q" name={`${value}.quantity`} component="select">
                  <option value=""></option>
                  {quantity.map(quantityOption =>
                    <option value={quantityOption} key={quantityOption}>{quantityOption}</option>)}
                </Field>
                <Field className="user-spec-value-input-relation" name={`${value}.value`} component="select">
                  <option value=""></option>
                  {relations.map(relationsOption =>
                    <option value={relationsOption} key={relationsOption}>{relationsOption}</option>)}
                </Field>
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    );

    const lived = ({ fields, meta: { touched, error } }) => (
      <div className="user-spec-fields">
        <div className="user-add-new-container" onClick={() => fields.unshift()}>
          <span className="user-add-new">+</span>
        </div>
        {fields.map((value, i) =>
          <div key={i} className="user-spec">
            <div className="user-spec-value">
              <div className="user-minus-new-container" onClick={() => fields.remove(i)}>
                <span className="user-minus-new">-</span>
              </div>
              { (i !== fields.length - 1 && <div className="user-down-new-container" onClick={() => fields.move(i, i+1)}>
                <span className="user-down-new">&darr;</span>
              </div>) || <div className="user-empty-new-container"><span className="user-empty-new"></span></div>}
              <Field name={`${value}.value`} component="input" className="user-spec-value-input" type="text" placeholder="Where have you lived?" />
            </div>
            {error && <div>error</div>}
          </div>
        )}
      </div>
    )

    const gtky = ({ fields }) => (
      <div className="user-spec-fields">
        {fields.map((value, i) =>
          <div key={i} className="user-spec-gtky">
            <div className="user-spec-value gray-text">{this.props.gtkyKEY[i]}</div>
            <Field name={`${value}`} component="input" className="user-spec-value-input-gtky" type="text" />
          </div>
        )}
      </div>
    )

    const { handleSubmit } = this.props;


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
                <form onSubmit={handleSubmit(this.save)}>
                  <div>
                    <div className="user-spec-fields">
                      <div className="user-spec">
                        <div className="user-spec-value">
                          <h4>Name</h4>
                          <Field name="first_name" component="input" className="user-spec-value-input" type="text" placeholder="First Name" />
                          <Field name="last_name" component="input" className="user-spec-value-input" type="text" placeholder="Last Name" />
                        </div>
                        <div>
                          <h4>Change Profile Picture</h4>
                          <input id="upload-demo" type="file" name="images" accept="image/*" onChange={(e)=>this._handleImageChange(e)} />
                          {$imagePreview}
                          <input
                            name='scale'
                            type='range'
                            onChange={this.handleScale}
                            min='1'
                            max='2'
                            step='0.01'
                            defaultValue='1'
                          />
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
                    <FieldArray name="education" component={education} />
                  </div>

                  <div>
                    <div className="user-item-pic-container">
                      <img className="user-item-pic" src="../pics/work.png" alt="" />
                      <hr size="1px" color="#ece6e2" />
                    </div>
                    <h4>Work Experience</h4>
                    <FieldArray name="work" component={work} />
                  </div>

                  <div>
                    <div className="user-item-pic-container">
                      <img className="user-item-pic" src="../pics/relationship.png" alt="" />
                      <hr size="1px" color="#ece6e2" />
                    </div>
                    <h4>Relationships</h4>
                    <FieldArray name="relation" component={relation} />
                  </div>

                  <div>
                    <div className="user-item-pic-container">
                      <img className="user-item-pic" src="../pics/location.png" alt="" />
                      <hr size="1px" color="#ece6e2" />
                    </div>
                    <h4>Places You Lived</h4>
                    <FieldArray name="lived" component={lived} />
                  </div>

                  <div>
                    <div className="user-item-pic-container">
                      <div className="user-item-pic" />
                      <hr size="1px" color="#ece6e2" />
                    </div>
                    <h4>Optional Inputs</h4>
                    <FieldArray name="gtky" component={gtky} />
                  </div>

                </form>
              </div>
              <div className="user-bottom-buttons">
                <Link to="/profile"><button className="user-save" onClick={handleSubmit(this.save)}>SAVE</button></Link>
                <button className="user-delete" onClick={this.delete}>DELETE PROFILE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )}
}

function mapStateToProps(store) {
  return {
    login: store.login,
    gtkyKEY: store.gtkyKEY,
    initialValues: store.login.data
  };
}

 function mapDispatchToProps(dispatch) {
   return bindActionCreators({ updateInfo, deleteAccount }, dispatch);
 }

  UserProfileEdit = reduxForm({
    form: 'profileUpdate',
    validate
  })(UserProfileEdit);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileEdit);
