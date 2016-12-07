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
import Schedule, {Types} from './ReplayFX_Axios';

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
        {DisplayName: 'Experience', Name: 'all'},
        {DisplayName: 'My Schedule', Name: 'favorites'}
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
    this.loadTypes = this.loadTypes.bind(this);

    this.loadSchedule();
    this.loadFavorites();
    this.loadTypes();
  }
  loadFavorites() {
    AsyncStorage.getItem('favorites', (err, value) => {
      if (value !== null) {
        this.setState({favorites: JSON.parse(value)});
      }
    });
  }
  loadSchedule() {
    Schedule().then((results) => {
      this.setState({baseSchedule: results.data});
    });

  }
  loadTypes() {
    Types().then((results) => {
      this.setState({tabs: [...this.state.tabs, ...results.data]});
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
    console.log('Here come the tabs');
    console.log(this.state.tabs);
    return (
        <ScrollableTabView renderTabBar = {() => <NewTabBar favoritesCount= {this.state.favorites.length}/>} >
          {this.state.tabs.map((item, index) =>
          {return (<View style={styles.slide} tabLabel= {item.DisplayName} key = {index} >
            <Content
              typeIs={item.Name}
              favorites={this.state.favorites}
              removeFavorite={this.removeFavorite}
              addFavorite={this.addFavorite}
              baseSchedule={this.state.baseSchedule}/>
          </View>);})}
        </ScrollableTabView>
    );
  }
}
