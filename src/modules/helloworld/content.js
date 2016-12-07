import React, {Component} from 'react';
import {

  ListView,
  Alert,
  TouchableHighlight,
  Modal,
  Image
} from 'react-native';
import styles, {stylechoice} from './StyleSheet';
import content_sections from './content_sections';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Info_Icon = require('../utils/Info_Icon');
import {createAnimatableComponent, View, Text} from 'react-native-animatable';

export default class Content extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(content_sections(this.props.typeIs, this.props.favorites, this.props.baseSchedule)),
      modalVisible: false,
      modalTitle: '',
      modalDescription: '',
      modalImage: '',
      modalStartTime: '',
      modalEndTime: '',
      modalLocation: ''
    };
    this.renderScheduleItem = this.renderScheduleItem.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.renderInfoButton = this.renderInfoButton.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.setState({
      dataSource: ds.cloneWithRowsAndSections(content_sections(nextProps.typeIs, nextProps.favorites, nextProps.baseSchedule))
    });
  }

  setModalVisible(visible, title, startTime, endTime, location, extendedDescription, image) {
    this.setState({
      modalVisible: visible,
      modalTitle: title,
      modalStartTime: startTime,
      modalEndTime: endTime,
      modalLocation: location,
      modalDescription: extendedDescription,
      modalImage: image});
  }

  renderInfoButton(item) {
    if (item.extendedDescription || item.image)
    {return (
  <TouchableHighlight onPress={() => {
    this.setModalVisible(true, item.title, item.startTime, item.endTime, item.location, item.extendedDescription, item.image);
  }}>
    <View>
      <Info_Icon/>
    </View>
  </TouchableHighlight>
    );}
    else
    {return (<View/>);
    }
  }

  renderScheduleItem(item) {

    return (

      <View style = {styles.info}>
        <Text animation='flipInY' delay={400} style={styles.title}>{item.title}</Text>
        <Text animation='flipInY' delay={400} style={styles.datetime}> {item.startTime} - {item.endTime}</Text>
        <Text animation='flipInY' delay={400} style={styles.datetime}>{item.location}</Text>
        <Text animation='flipInY' delay={400} style={styles.description}>{item.description}</Text>
        <View style={styles.iconrowstyle}>

      {this.renderInfoButton(item)}

        <TouchableHighlight onPress={() => {
          if (item.isFavorite)
          {
            this.props.removeFavorite(item.id);
          }
          else {
            this.props.addFavorite(item.id);
          }
        }}>
          <View style={styles.infoIcon} animation= {item.isFavorite ? 'bounce' : 'shake'} delay={400}>
             <Ionicons name= 'ios-game-controller-b' size={36}
               color= {item.isFavorite ? stylechoice.accentcolor : stylechoice.inactive} />
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
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose ={() => {Alert.alert('Modal has been closed!');}}>
          <View style= {styles.innerContainer}>
            <Text style={styles.modaltitle}>{this.state.modalTitle}</Text>
            <Text style={styles.modaldatetime}>{this.state.modalStartTime} - {this.state.modalEndTime}</Text>
            <Text style ={styles.modaldatetime}>{this.state.modalLocation}</Text>
            <View style ={{alignItems: 'center'}}> 
                <Image source={{uri: this.state.modalImage}} style={styles.modalimage}/>
           </View>
            <Text style = {styles.modaldescription}>{this.state.modalDescription}</Text>
            <View style ={styles.center}>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
              <Text style= {styles.title}>Close</Text>
            </TouchableHighlight>
          </View>
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
