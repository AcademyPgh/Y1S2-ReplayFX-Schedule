import React, {Component} from 'react';
import Scroll_Tab_View from './Scroll_Tab_View';
import styles from './StyleSheet';
import {
  Text,
  View,
  Image,
  BackAndroid
} from 'react-native';

//Blink is our main component that renders all of our other components
export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.backButton = this.backButton.bind(this);
    this.backButton();
  }
  backButton() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      BackAndroid.exitApp(0);
    });
  }
  render() {
    return (
      // Container that just centers our logo
      <View style= {{flex: 1}}>
        <View style= {styles.home}>
         {/* Loads our main logo image */}
        <Image source={require('../images/replay-fx-logo.png')} style={styles.logoimage}/>
      </View>
      {/* Line of text under the logo saying we built this */}
      <Text style= {styles.academy}>App Built by Academy Pittsburgh</Text>
        {/* Renders the swipeable nav bar */}
        <Scroll_Tab_View/>
            {/* Shows our "main content" */}

            </View>
    );
  }
}
