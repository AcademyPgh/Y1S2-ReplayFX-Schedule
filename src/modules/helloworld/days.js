import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Button,
  Alert
} from 'react-native';

import schedule_sections from './schedule_sections';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
export default class Days extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(schedule_sections()),
      someText: 'ACADEMY PITTSBURGH 2 IS MAKING AN APP!!!!!'
    };
  }
  onPressButton(item) {
    this.setState({
      dataSource: this.state.dataSource,
      someText: 'More text, does it work?'
    });
    // console.log("Imma get pressed!");
  }

  renderScheduleItem(item) {
    return (<TouchableHighlight underlayColor='#000000'>
      <View>
        <Text style={dayStyles.title}>{item.title} </Text>
        <Button
            onPress={onButtonPress}
            title='+'
            //color='#841584'
            color = 'navy'
            accessibilityLabel='Ok, Great!'
            alignItems= 'right'
            justifyContent= 'right'

          />
        <Text style={dayStyles.datetime}>@ {item.starttime} - {item.endtime}</Text>
        <Text style={dayStyles.description}>{item.description}</Text>
        <Text style={dayStyles.description}>{item.type[0]}</Text>

      </View>
    </TouchableHighlight>);
  }

  renderSectionHeader(sectionData, category) {
    return (<View>
      <Text style={dayStyles.header}>{category}</Text>
    </View>);
  }

  render() {
    return (
      <View style={dayStyles.container}>
        <Text>{this.state.someText}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderScheduleItem}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}

const dayStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  title: {
    color: '#333333',
    fontSize: 20,
    backgroundColor: '#E5ECEE'
  },
  description: {
    fontSize: 15
  },
  datetime: {
    textAlign: 'center'
  },
  header: {
    color: '#FFFFFF',
    backgroundColor: '#222222'
  }

});
