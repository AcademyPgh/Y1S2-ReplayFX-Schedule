import React, {Component} from 'react';
import Scroll_Tab_View from './Scroll_Tab_View';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class Blink extends Component {
  render() {
    return (
      <View style= {{flex: 1}}>
        <View style= {{alignItems: 'center', backgroundColor: '#F5FCFF'}}>
        <Image source={require('../images/replay-fx-logo.png')} style={{width: 200, height: 100}}/>
      </View>
        <Scroll_Tab_View/>
            </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});
