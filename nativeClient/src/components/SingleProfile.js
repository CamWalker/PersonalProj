import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


const SingleProfile = (props) => {

  selectProfile = () => {
    Actions.selectedProfile();
  }

  return (
    <TouchableOpacity onPress={this.selectProfile}>
      <View style={styles.containerStyle}>
        <View style={styles.containerStyle2}>
          <View style={styles.picContainer}>
            <Image style={styles.imageStyle} source={require('../pics/blank-profile.png')} />
          </View>
          <View style={styles.containerStyle3}>
            <View style={styles.containerStyle4}>
              <Text style={styles.textName}>Name NAME</Text>
              <Text style={styles.textDist}>100 feet</Text>
            </View>
            <View style={styles.containerStyle5}>
              <View style={styles.containerStyle6}>
                <Image style={styles.imageStyle2} source={require('../pics/work.png')} />
                <Text style={styles.textSpec}>Education</Text>
              </View>
              <View style={styles.containerStyle6}>
                <Image style={styles.imageStyle2} source={require('../pics/work.png')} />
                <Text style={styles.textSpec}>Work</Text>
              </View>
              <View style={styles.containerStyle6}>
                <Image style={styles.imageStyle2} source={require('../pics/work.png')} />
                <Text style={styles.textSpec}>Relations</Text>
              </View>
              <View style={styles.containerStyle6}>
                <Image style={styles.imageStyle2} source={require('../pics/work.png')} />
                <Text style={styles.textSpec}>Lived</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerStyle7}>
          <Text style={styles.textQ}>Ask Me about...</Text>
          <Text style={styles.textA}>Building this website</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 2,
    backgroundColor: '#fffdfb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 5,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'flex-start',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  picContainer: {
    flex: 1
  },
  imageStyle2: {
    height: 15,
    width: 15
  },
  containerStyle2: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  containerStyle3: {
    alignSelf: 'stretch',
    flex: 4
  },
  containerStyle4: {
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  containerStyle5: {
    marginLeft: 8,
    marginBottom: 10
  },
  containerStyle6: {
    flexDirection: 'row',
    marginVertical: 5
  },
  containerStyle7: {
    marginBottom: 10,
    marginLeft: 20,
    alignSelf: 'stretch'
  },
  textName: {
    color: '#444',
    fontSize: 18
  },
  textDist: {
    color: '#aaa',
    fontSize: 12
  },
  textSpec: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 15,
    justifyContent: 'flex-end'
  },
  textQ: {
    color: '#444',
    fontSize: 14
  },
  textA: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 20
  }
}

export default SingleProfile;
