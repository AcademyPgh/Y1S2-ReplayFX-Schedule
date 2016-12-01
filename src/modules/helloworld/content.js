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
import ButtonTest from './test_button_change';
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
      buttonClicked: false

    };
    this.renderScheduleItem = this.renderScheduleItem.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }
  changeStyle() {
    var isSelected = this.state.buttonClicked;
    var style = {
      color: 'navy'
    };
    if (isSelected) {
      style = {
        color: 'yellow'
      };
    }
    return style;
  }
  handleClick() {
    this.setState = ({buttonClicked: !this.state.buttonClicked});
    if (!this.state.buttonClicked) {
      Alert.alert('Favorite added!');
    }
    else {
      Alert.alert('Removed from Favorites');
    }
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
          <Text style= {{color: 'navy'}}>[+]</Text>
        </TouchableHighlight>

        <ButtonTest/>

       </View>
      </View>
    );

  }
  /*
  <TouchableHighlight onPress={() => {
    this.handleClick();
  }}>
       <Text style={this.changeStyle()}>[*]</Text>
     </TouchableHighlight>

*/
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
          animationType={'slide'}
          transparent={true}
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
          dataSource={this.state.dataSource}
          renderRow={this.renderScheduleItem}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}
