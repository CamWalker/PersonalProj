import React, { Component } from 'react';
import { View } from 'react-native';

const Nav = (props) => {

  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#81A8CD',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    position: 'relative'
  }
};

export default Nav;
