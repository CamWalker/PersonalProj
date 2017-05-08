import React, { Component } from 'react';
import { Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { logItIn, loginAction, signUpAction } from '../actions/action_login.js';







class LoginForm extends Component {
  state = { signup: false };

  signUp = (values) => {
    this.props.loginAction();
    this.props.signUpAction(values);
  }

  login = (values) => {
    if (values) {
      this.props.loginAction();
      this.props.logItIn(values.email, values.password);
    }
  }

  loginSwitch = () => {
    this.setState({ signup: !this.state.signup })
  }



  render() {
    const { handleSubmit } = this.props;
    const renderInput = ({ input: { onChange, ...restInput }, placeholder, secureTextEntry }) => {
      return <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
        placeholder={placeholder} />
    }

    if (this.state.signup) {
      return (
        <View style={styles.container}>
          <Text style={styles.intro}>Sign up to connect with those closest to you...literally!</Text>
          <Text style={styles.intro}>It's free.</Text>
          <View style={styles.inputContainer}>
            <Field name="firstName" secureTextEntry={false} component={renderInput} placeholder="First Name"/>
            <Field name="lastName" secureTextEntry={false} component={renderInput} placeholder="Last Name"/>
            <Field name="email" secureTextEntry={false} component={renderInput} placeholder="Email"/>
            <Field name="password" secureTextEntry={true} component={renderInput} placeholder="Password"/>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit(this.signUp)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>Have an account?</Text>
            <Text
              style={styles.bottomTextSwitch}
              onPress={this.loginSwitch}
            >Log In</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Field name="email" secureTextEntry={false} component={renderInput} placeholder="Email"/>
            <Field name="password" secureTextEntry={true} component={renderInput} placeholder="Password"/>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit(this.login)}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>Don't have an account?</Text>
            <Text
              style={styles.bottomTextSwitch}
              onPress={this.loginSwitch}
            >Sign Up</Text>
          </View>
        </View>
      )
    }
  }
}


const styles = {
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'space-between'
  },
  intro: {
    color: '#777',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: 'bold',
    margin: 10
  },
  inputContainer: {
    paddingTop: 5,
    paddingBottom: 10
  },
  input: {
    color: '#777',
    padding: 5,
    marginVertical: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 33,
    borderColor: '#d1cbc7',
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#81A8CD',
    paddingVertical: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 23
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  bottomText: {
    color: '#777',
    paddingRight: 5
  },
  bottomTextSwitch: {
    color: '#ff8355',
  }
};

function mapStateToProps(store) {
  return {
    login: store.login,
    appActivated: store.appActivated,
    loginForm: store.form
  };
}

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

LoginForm =  connect(mapStateToProps, { loginAction, signUpAction, logItIn })(LoginForm);

export default LoginForm;
