import React, { Component } from 'react';
import { ScrollView, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './common/Header';
import SingleProfile from './SingleProfile';
import Nav from './common/Nav';
import Card from './common/Card';

class SelectedProfile extends Component {

  render() {
    const value = 'Search profiles'
    return (
      <View style={styles.bodyStyle} >
        <Header>
          <Image style={styles.imageStyle} source={require('../pics/GoodTurnWhite.png')} />
        </Header>
        <ScrollView>
          <Card>
            <View style={styles.containerStyle}>
              <View style={styles.containerStyle1}>
                <TouchableWithoutFeedback  onPress={() => Actions.feed()}>
                  <View style={styles.arrowContainer}>
                    <Text style={styles.arrowText}>&larr;</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.containerStyle2}>
                <Image style={styles.imageStyle2} source={require('../pics/blank-profile.png')} />
              </View>
              <View style={styles.containerStyle3}>
                <Text style={styles.textName}>
                  Name NAME
                </Text>
              </View>
              <View style={styles.containerStyle4}>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Education</Text>
                </View>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Work</Text>
                </View>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Relations</Text>
                </View>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Lived</Text>
                </View>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Education</Text>
                </View>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Work</Text>
                </View>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Relations</Text>
                </View>
                <View style={styles.containerStyle6}>
                  <Image style={styles.imageStyle3} source={require('../pics/work.png')} />
                  <Text style={styles.textSpec}>Lived</Text>
                </View>
              </View>
              <View style={styles.containerStyle5}>
                <View style={styles.containerStyle7}>
                  <Text style={styles.textQ}>Ask Me about...</Text>
                  <Text style={styles.textA}>Building this website</Text>
                </View>
                <View style={styles.containerStyle7}>
                  <Text style={styles.textQ}>I'm too good for...</Text>
                  <Text style={styles.textA}>Building this website</Text>
                </View>
              </View>
            </View>
          </Card>
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
  imageStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 35,
    width: 170,
    marginVertical: 10
  },
  imageStyle2: {
    height: 130,
    width: 130,
    borderRadius: 65
  },
  imageStyle3: {
    height: 18,
    width: 18,
    marginRight: 15
  },
  arrowContainer: {
    backgroundColor: '#597d9e',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  arrowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22
  },
  textName: {
    color: '#444',
    fontSize: 28
  },
  textSpec: {
    color: '#aaa',
    fontSize: 14
  },
  textQ: {
    color: '#444',
    fontSize: 16
  },
  textA: {
    color: '#aaa',
    fontSize: 16,
    marginLeft: 20
  },
  containerStyle: {
    alignItems: 'center'
  },
  containerStyle1: {
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'flex-start'
  },
  containerStyle2: {
    marginVertical: 10
  },
  containerStyle3: {
    marginVertical: 10
  },
  containerStyle4: {
    marginVertical: 10
  },
  containerStyle5: {
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'flex-start'
  },
  containerStyle6: {
    flexDirection: 'row',
    marginVertical: 5
  },
  containerStyle7: {
    marginVertical: 5,
    marginHorizontal: 10
  }
};

export default SelectedProfile;
