import React, {Component} from 'react';
import {
  View,
  AsyncStorage
} from 'react-native';
import styles from './StyleSheet';
import _ from 'lodash';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Content from './content';
import Schedule from './schedule_from_azure';

// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default class Scroll_Tab_View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faves: [],
      tabs:
      [{name: 'Experience', value: 'all'},
      {name: 'My Schedule', value: 'favorite'},
      {name: 'Featured', value: 'featured'},
      {name: 'Play', value: 'games'},
      {name: 'Compete', value: 'competition'},
      {name: 'Watch', value: 'movies'},
      {name: 'Listen', value: 'music'},
      {name: 'Learn', value: 'seminar'},
    ],
    baseSchedule: [],

    };

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.loadSchedule = this.loadSchedule.bind(this);
    this.loadFavorites = this.loadFavorites.bind(this);

    this.loadSchedule();
    this.loadFavorites();

  }

  loadFavorites() {
    AsyncStorage.getItem('favorites', (err, value) => {
      if (value !== null) {
        // We have data!!
        this.setState({faves: JSON.parse(value)});
      }
    });
  }

  loadSchedule() {
    Schedule().then((results) => {
      this.setState({baseSchedule: results.data});
      //AsyncStorage.removeItem('favorites');
    });
  }

  addFavorite(id)
  {
    let faves = [...this.state.faves, id];
    this.setState({faves});
    AsyncStorage.setItem('favorites', JSON.stringify(faves));
  }

  removeFavorite(id)
  {
    let faves = _.pull(this.state.faves, id);
    this.setState({faves});
    AsyncStorage.setItem('favorites', JSON.stringify(faves));
  }

  render() {
    return (
        <ScrollableTabView renderTabBar = {() => <ScrollableTabBar />} >
          {this.state.tabs.map((item, index) =>
          {return (<View style={styles.slide2} tabLabel= {item.name} key = {index}>
            <Content typeIs={item.value} faves={this.state.faves} removeFavorite={this.removeFavorite} addFavorite={this.addFavorite} baseSchedule={this.state.baseSchedule}/>
          </View>);})}
        </ScrollableTabView>
    );
  }
}
