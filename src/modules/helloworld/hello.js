import React, {Component} from 'react';
import Scroll_Tab_View from './Scroll_Tab_View';
import styles from './StyleSheet';
import {
  View,
  Image
} from 'react-native';

export default class Blink extends Component {
  render() {
    return (
      <View style= {{flex: 1}}>
        <View style= {{alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F5FCFF'}}>
        <Image source={require('../images/replay-fx-logo.png')} style={{width: 200, height: 100}}/>
      </View>
        <Scroll_Tab_View/>
            </View>
    );
  }
}
