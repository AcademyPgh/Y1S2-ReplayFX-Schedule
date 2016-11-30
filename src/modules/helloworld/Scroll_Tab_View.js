import React, {Component} from 'react';
import {
  View
} from 'react-native';
import styles from './StyleSheet';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
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
      {name: 'Learn', value: 'Seminar'},
      {name: 'My Schedule', value: 'Favorites'}
      ]
    };
  }
  render() {
    return (
        <ScrollableTabView renderTabBar = {() => <ScrollableTabBar />} >
          {this.state.tabs.map((item, index) =>
          {return (<View style={styles.slide2} tabLabel= {item.name} key = {index}>
            <Content typeIs={item.value}/>
          </View>);})}
        </ScrollableTabView>
    );
  }
}
