import React from 'react';
import connect from 'react-redux';
import { reduxForm, Field } from 'redux-form';

// import bindActionCreators from 'redux';


const Help = (props) => {

  const contact = (values) => {
    console.log(values);
  }

  return (
    <div className="about-page">
      <div className="about-container">
        <h2>Contact Us</h2>
        <div className="about-content">
          <form onSubmit={handleSubmit(this.contact)}>
            <Field component="input" placeholder="Subject" />
            <Field component="text-area" placeholder="Subject" />
          </form>
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(store) {
  return {
    login: store.login
  }
}

Help = reduxForm({
  form: 'contactForm'
})(Help);

export default connect(mapStateToProps)(Help);
