import React, {Component} from 'react';
import {
  //Text,
  //View,
  ListView,
  Alert,
  TouchableHighlight,
  Modal
} from 'react-native';
import styles from './StyleSheet';
import content_sections from './content_sections';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Info_Icon = require('../utils/Info_Icon');
import {createAnimatableComponent, View, Text} from 'react-native-animatable';
//const AnimatableListView = createAnimatableComponent(ListView);

export default class Content extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(content_sections(this.props.typeIs, this.props.favorites)),
      // someText: 'App Made By Academy Pittsburgh',
      modalVisible: false,
      modalTitle: '',
      modalDescription: ''
    };
    this.renderScheduleItem = this.renderScheduleItem.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    //this.changeStyle = this.changeStyle.bind(this);
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

  setModalVisible(visible, title, description) {
    this.setState({modalVisible: visible, modalTitle: title, modalDescription: description});
  }

  renderScheduleItem(item) {

    return (
      <View style = {styles.info}>
        <Text animation='flipInY' delay={400} style={styles.title}>{item.title}</Text>
        <Text animation='flipInY' delay={400} style={styles.datetime}>@ {item.starttime} - {item.endtime}</Text>
        <Text animation='flipInY' delay={400} style={styles.description}>{item.description}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true, item.title, item.description);
        }}>
        <View>
        <Info_Icon/>
        </View>
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
          <View animation= {item.isFavorite ? 'bounce' : 'shake'} delay={400}>
             <Ionicons name= 'ios-game-controller-b' size={36}
               color= {item.isFavorite ? '#3B3D68' : 'grey'} />
             </View>
           </TouchableHighlight>
       </View>
      </View>
    );
  }

  renderSectionHeader(sectionData, category) {
    let d = new Date(category);
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let n = weekday[d.getDay()];
    return (<View animation= 'bounceIn' delay= {400}>
      <Text style={styles.header}>{n}</Text>
    </View>);
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose ={() => {Alert.alert('Modal has been closed!');}}>
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
