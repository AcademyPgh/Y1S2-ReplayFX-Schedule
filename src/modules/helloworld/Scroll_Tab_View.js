import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Days from './days';
import Games from './games';
import Competition from './competitions';
import Favorties from './favorities';
// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default class Scroll_Tab_View extends Component {
  render() {
    return (
        <ScrollableTabView >
        <View style={styles.slide1} tabLabel= 'Days'>
          <Days typeIs='days'/>
        </View>
        <View style={styles.slide2} tabLabel= 'Featured'>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3} tabLabel= 'Compete'>
          <Competition/>
        </View>
        <View style= {styles.slide1} tabLabel= 'Games'>
          <Games/>
        </View>
        <View style={styles.slide2} tabLabel= 'Favorties'>
          <Favorties/>
        </View>
        </ScrollableTabView>
    );
  }
}
var styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
/*
const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  }
});
*/
