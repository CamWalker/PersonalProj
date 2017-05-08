import React, { Component } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import Header from './common/Header';
import Card from './common/Card';
import Nav from './common/Nav';
import LoginForm from './LoginForm';

class Login extends Component {



  render() {
    return (
      <View style={styles.bodyStyle} >
        <View>
          <Header>
            <Image style={styles.imageStyle} source={require('../pics/GoodTurnWhite.png')} />
          </Header>
          <ScrollView>
            <Card>
              <LoginForm />
            </Card>
          </ScrollView>
        </View>
        <View>
          <Nav />
        </View>
      </View>
    )
  }
}


const styles = {
  bodyStyle: {
    backgroundColor: '#F2EEEB',
    flex: 1,
    justifyContent: 'space-between'
  },
  imageStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 35,
    width: 170,
    marginVertical: 10
  }
};

export default Login;
