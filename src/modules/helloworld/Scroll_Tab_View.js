import React, {Component} from 'react';
import {
  View,
  AsyncStorage
} from 'react-native';
import styles from './StyleSheet';
import _ from 'lodash';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NewTabBar from './replay_scroll_tab_view';
import Content from './content';
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
      ]
    };
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }
  addFavorite(id)
{
    let favorites = [...this.state.favorites, id];
    this.setState({favorites});
  }

  removeFavorite(id)
{
    let favorites = _.pull(this.state.favorites, id);
    this.setState({favorites});
  }

  render() {
    return (
        <ScrollableTabView renderTabBar = {() => <NewTabBar favoritesCount= {this.state.favorites.length}/>} >
          {this.state.tabs.map((item, index) =>
          {return (<View style={styles.slide} tabLabel= {item.name} key = {index} >
            <Content typeIs={item.value} favorites={this.state.favorites} removeFavorite={this.removeFavorite} addFavorite={this.addFavorite}/>
          </View>);})}
        </ScrollableTabView>
    );
  }
}
