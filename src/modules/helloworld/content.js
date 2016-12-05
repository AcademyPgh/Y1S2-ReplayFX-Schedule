import React, {Component} from 'react';
import {
  Text,
  View,
  ListView,
  Alert,
  TouchableHighlight,
  Modal,
  Dimensions
} from 'react-native';
import styles from './StyleSheet';

import content_sections from './content_sections';
import Days from './days';
export default class Content extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      someText: 'App Made By Academy Pittsburgh',
      modalVisible: false,
      modalTitle: '',
      modalDescription: '',
      buttonColor: 'yellow',
    };

    this.dataSource = ds.cloneWithRowsAndSections(content_sections(this.props.typeIs, this.props.faves, this.props.baseSchedule));
    this.renderScheduleItem = this.renderScheduleItem.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.changeButton = this.changeButton.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

    this.width = Dimensions.get('window').width; //full width
  }

  componentWillReceiveProps(nextProps)
  {
    //if (this.props.faves.length !== nextProps.faves.length) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      });

      this.dataSource = ds.cloneWithRowsAndSections(content_sections(nextProps.typeIs, nextProps.faves, nextProps.baseSchedule));
    //}
  }

  changeButton() {
    this.setState({buttonColor: 'navy'});
  }

  setModalVisible(visible, title, description) {
    this.setState({modalVisible: visible, modalTitle: title, modalDescription: description});
  }
  renderScheduleItem(item) {
    return (
      <View>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.datetime}>@ {item.StartTime} - {item.EndTime}</Text>
        <Text style={styles.description}>{item.Description}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true, item.Title, item.Description);
        }}>
          <Text>[+]</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          if (item.isFavorite) {
            this.props.removeFavorite(item.Id);
          } else {
            this.props.addFavorite(item.Id);
          }
        }}>
        <Text style={{color: item.isFavorite ? 'blue' : 'red'}}>{item.isFavorite ? 'remove' : 'add'} favorite</Text>
        </TouchableHighlight>

       </View>
      </View>
    );

  }

  renderSectionHeader(sectionData, category) {
    let day = new Date(category);
    day = Days[day.getDay()];
    day = day ? day : category;
    return (<View>
      <Text style={styles.header}>{day}</Text>
    </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(!this.state.modalVisible);
        }}>
        <Text style={{width: this.width, textAlign: 'center'}}>{this.state.someText}</Text>
      </TouchableHighlight>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {Alert.alert('Modal has been closed!');}}>
          <View>
            <Text>{this.state.modalTitle}</Text>
            <Text>{this.state.modalDescription}</Text>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
              <Text>hide</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderScheduleItem}
          renderSectionHeader={this.renderSectionHeader}
          style={{flex: 1}}
        />
      </View>
    );
  }
}
