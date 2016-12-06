import React, {Component} from 'react';
import Scroll_Tab_View from './Scroll_Tab_View';
import styles from './StyleSheet';
import {
  Text,
  View,
  Image
} from 'react-native';

export default class Blink extends Component {
  render() {
    return (
      <View style= {{flex: 1}}>
        <View style= {styles.home}>

        <Image source={require('../images/replay-fx-logo.png')} style={styles.logoimage}/>
      </View>
      <Text style= {styles.academy}>App Made by Academy Pittsburgh</Text>
        <Scroll_Tab_View/>
            </View>
    );
  }
}
