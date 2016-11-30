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
      dataSource: ds.cloneWithRowsAndSections(content_sections(this.props.typeIs)),
      someText: 'App Made By Academy Pittsburgh',
      modalVisible: false,
      modalTitle: '',
      modalDescription: '',
      buttonColor: 'yellow'
    };
    this.renderScheduleItem = this.renderScheduleItem.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.changeButton = this.changeButton.bind(this);
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
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.datetime}>@ {item.starttime} - {item.endtime}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true, item.title, item.description);
        }}>
          <Text>[+]</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {
          this.changeButton();
        }}>
        <Text style={{color: this.state.buttonColor}}>[*] </Text>
        </TouchableHighlight>

       </View>
      </View>
    );

  }

  renderSectionHeader(sectionData, category) {
    return (<View>
      <Text style={styles.header}>{category}</Text>
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
          dataSource={this.state.dataSource}
          renderRow={this.renderScheduleItem}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}
