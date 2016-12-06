import React, {Component} from 'react';
import {
  View,
  AsyncStorage
  //Text
} from 'react-native';
import styles from './StyleSheet';
import _ from 'lodash';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import NewTabBar from './replay_scroll_tab_view';
import Content from './content';
import Schedule from './ReplayFX_Axios';
// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
export default class Scroll_Tab_View extends Component {

  constructor(props) {
    super(props);

    const initialFaves = [7,8];
    this.state = {
      favorites: initialFaves,
      tabs:
      [{name: 'Experience', value: 'all'},
      {name: 'My Schedule', value: 'Favorites'},
      {name: 'Featured', value: 'Featured'},
      {name: 'Play', value: 'Games'},
      {name: 'Compete', value: 'Competition'},
      {name: 'Watch', value: 'Movies'},
      {name: 'Listen', value: 'Music'},
      {name: 'Learn', value: 'Seminar'}
      ],
      baseSchedule: []
    };

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.loadFavorites = this.loadFavorites.bind(this);
    // this.loadSchedule();
    // this.loadFavorites();
  }
  loadFavorites() {
    AsyncStorage.getItem('favorites', (err, value) => {
      if (value !== null) {
        this.setState({favories: JSON.parse(value)});
      }
    });
  }
  loadSchedule() {
    Schedule().then((results) => {
      this.setState({baseSchedule: results.data});
    });
  }
  addFavorite(id)
{
    let favorites = [...this.state.favorites, id];
    this.setState({favorites});
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }

  removeFavorite(id)
{
    let favorites = _.pull(this.state.favorites, id);
    this.setState({favorites});
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }

  render() {
    return (
        <ScrollableTabView renderTabBar = {() => <NewTabBar favoritesCount= {this.state.favorites.length}/>} >
          {this.state.tabs.map((item, index) =>
          {return (<View style={styles.slide} tabLabel= {item.name} key = {index} >
            <Content typeIs={item.value} favorites={this.state.favorites}
              removeFavorite={this.removeFavorite} addFavorite={this.addFavorite}/>
          </View>);})}
        </ScrollableTabView>
    );
  }
}
