import React, {Component} from 'react';
import ex_schedule from './schedule';
import {
  TouchableHighlight,
  Text,
  Alert,
  AsyncStorage
} from 'react-native';
import styles from './StyleSheet';
export default class ButtonTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      favorites: [
      ]
    };
  }
  handleClick() {
    this.setState({
      isSelected: !this.state.isSelectedß
    });
    if (!this.state.isSelected) {
      Alert.alert('Favorite added!');
    }
    else {
      Alert.alert('Removed from Favorites');
    }
  }
  render() {
    var isSelected = this.state.isSelected;
    var style = {
      color: 'navy'
    };
    if (isSelected) {
      style = styles.favorites;
    }
    return (
      <TouchableHighlight onPress={() => {
        this.handleClick();
      }}>
           <Text style={style}>[*]</Text>
         </TouchableHighlight>

    );
  }
}
