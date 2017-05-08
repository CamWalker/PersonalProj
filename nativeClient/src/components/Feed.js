import React, { Component } from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';
import Header from './common/Header';
import SingleProfile from './SingleProfile';
import Nav from './common/Nav';

class Feed extends Component {

  render() {
    const value = 'Search profiles'
    return (
      <View style={styles.bodyStyle} >
        <Header>
          <TextInput
            placeholder="Search profiles"
            autoCorrect={false}
            value={value}
            style={styles.inputStyle}/>
        </Header>
        <ScrollView>
          <SingleProfile />
          <SingleProfile />
          <SingleProfile />
          <SingleProfile />
          <SingleProfile />
          <SingleProfile />
        </ScrollView>
        <Nav />
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
  }
};

export default Feed;
