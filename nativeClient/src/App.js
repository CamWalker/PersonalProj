import React, { Component } from 'react';
import { View, TextInput, ScrollView, Image } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Nav from './components/Nav';

class App extends Component {

  render() {
    const value = 'Search profiles'
    return (
      <View style={styles.bodyStyle} >
        <Header>
          <Image style={styles.imageStyle} source={require('./pics/GoodTurnWhite.png')} />
        </Header>
        <View>
          <Card />
        </View>
        <Nav />
      </View>
    )
  }
}


// <TextInput
//   placeholder="Search profiles"
//   autoCorrect={false}
//   value={value}
//   style={styles.inputStyle}/>

const styles = {
  bodyStyle: {
    backgroundColor: '#F2EEEB',
    flex: 1,
    justifyContent: 'space-between'
  },
  inputStyle: {
    backgroundColor: '#6c93b6',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignSelf: 'stretch',
    height: 20,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 3,
    fontSize: 14
  },
  imageStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 35,
    width: 170,
    marginVertical: 10
  }
};

export default App;
