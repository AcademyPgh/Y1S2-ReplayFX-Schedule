import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Content from './content';
// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default class Scroll_Tab_View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs:
      [{name: 'Experience', value: 'all'},
      {name: 'Featured', value: 'Featured'},
      {name: 'Play', value: 'Games'},
      {name: 'Compete', value: 'Competition'},
      {name: 'Watch', value: 'Movies'},
      {name: 'Listen', value: 'Music'},
      {name: 'Learn', value: 'Seminar'}
      ]
    };
  }
  render() {
    return (
        <ScrollableTabView >
          {this.state.tabs.map((item, index) =>
          {return (<View style={styles.slide2} tabLabel= {item.name} key = {index}>
            <Content typeIs={item.value}/>
          </View>);})}
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
