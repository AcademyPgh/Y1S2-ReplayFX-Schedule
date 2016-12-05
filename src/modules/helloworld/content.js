import React, {Component} from 'react';
import {
  Text,
  View,
  ListView,
  Alert,
  TouchableHighlight,
  Modal
} from 'react-native';
import styles from './StyleSheet';
import content_sections from './content_sections';
export default class Content extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(content_sections(this.props.typeIs, this.props.favorites)),
      someText: 'App Made By Academy Pittsburgh',
      modalVisible: false,
      modalTitle: '',
      modalDescription: '',
      buttonClicked: false
    };
    this.renderScheduleItem = this.renderScheduleItem.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.setState({
      dataSource: ds.cloneWithRowsAndSections(content_sections(nextProps.typeIs, nextProps.favorites))
    });
  }
  changeStyle(isFavorite) {
    //var isSelected = isFavorite;
    var style = {
      color: 'navy'
    };
    if (isFavorite) {
      style = {
        color: 'yellow'
      };
    }
    return style;
  }
  // handleClick(favoriteId) {
  //   let tempfaves = this.state.faves;// this.setState = ({buttonClicked: !this.state.buttonClicked})
  //   if (_.indexOf(tempfaves, favoriteId) > -1)
  //     {
  //     _.pull(tempfaves, favoriteId);
  //     Alert.alert('Removed from Favorites');
  //   }
  //
  //   else {
  //     tempfaves.push(favoriteId);
  //     Alert.alert('Added to Favorites');
  //   }
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2,
  //     sectionHeaderHasChanged: (s1, s2) => s1 !== s2
  //   });
  //   this.setState({dataSource: ds.cloneWithRowsAndSections(content_sections(this.props.typeIs, tempfaves)),
  //     faves: tempfaves});
  // }

  setModalVisible(visible, title, description) {
    this.setState({modalVisible: visible, modalTitle: title, modalDescription: description});
  }

  renderScheduleItem(item) {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.datetime}>{item.starttime} - {item.endtime}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.description}>{item.isFavorite ? 'favorite' : ''}</Text>
        <View style = {{marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true, item.title, item.description);
        }}>
          <Text style= {{color: 'navy'}}>[+]</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          if (item.isFavorite)
          {
            this.props.removeFavorite(item.id);
          }
          else {
            this.props.addFavorite(item.id);
          }
        }}>
             <Text style={this.changeStyle(item.isFavorite)}>[*]</Text>
           </TouchableHighlight>
       </View>
      </View>
    );
  }
  /*
  <ButtonTest/>
*/
  renderSectionHeader(sectionData, category) {
    let d = new Date(category);
    console.log(d);
    var weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let n = weekday[d.getDay()];
    return (<View>
      <Text style={styles.header}>{n}</Text>
    </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(!this.state.modalVisible);
        }}>
        <Text>{this.state.someText}</Text>
      </TouchableHighlight>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {Alert.alert('Modal has been closed!');}}>
          <View style= {styles.innerContainer}>
            <Text>{this.state.modalTitle}</Text>
            <Text>{this.state.modalDescription}</Text>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
              <Text style= {styles.title}>Close</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <ListView
          styles={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderScheduleItem}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}
