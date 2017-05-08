import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

class Card extends Component {

  render() {
    return (
      <ScrollView style={styles.containerStyle}>
        <Text>
          Feed
        </Text>
      </ScrollView>
    )
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: '#fffdfb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 3
  }
}

export default Card;
