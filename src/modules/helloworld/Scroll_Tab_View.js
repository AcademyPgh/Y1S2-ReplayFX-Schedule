import React, {Component} from 'react';
import {
  View,
  AsyncStorage
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
    //const initialFaves = [7,8];
    this.state = {
      favorites: [],
      //baseSchedule: ex_schedule(),
      tabs: [
        {name: 'Experience', value: 'all'},
        {name: 'My Schedule', value: 'favorites'}
      ],
      // {name: 'Featured', value: 'featured'},
      // {name: 'Play', value: 'games'},
      // {name: 'Compete', value: 'competition'},
      // {name: 'Watch', value: 'movies'},
      // {name: 'Listen', value: 'music'},
      // {name: 'Learn', value: 'seminar'}
      // ],
      baseSchedule: []
    };

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.loadSchedule = this.loadSchedule.bind(this);
    this.loadFavorites = this.loadFavorites.bind(this);
    this.loadTabs =

    this.loadSchedule();
    this.loadFavorites();
  }
  loadFavorites() {
    AsyncStorage.getItem('favorites', (err, value) => {
      if (value !== null) {
        this.setState({favorites: JSON.parse(value)});
      }
    });
  }
  loadSchedule() {
    //console.log("loading schedule");
    Schedule().then((results) => {
      this.setState({baseSchedule: results.data});
    //  console.log(results);
    });

  }
  addFavorite(id)
  {
    let favorites = [...this.state.favorites, id];
    this.setState({favorites});
    console.log('Here comes favorites');
    console.log(favorites);
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
            <Content
              typeIs={item.value}
              favorites={this.state.favorites}
              removeFavorite={this.removeFavorite}
              addFavorite={this.addFavorite}
              baseSchedule={this.state.baseSchedule}/>
          </View>);})}
        </ScrollableTabView>
    );
  }
}
