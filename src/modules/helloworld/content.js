import React, {Component} from 'react';
import {
  Text,
  View,
  ListView,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';
import styles from './StyleSheet';

import content_sections from './content_sections';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class Content extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(content_sections(this.props.typeIs)),
      someText: 'App Made By Academy Pittsburgh'
    };
  }

  renderScheduleItem(item) {
    return (<TouchableHighlight underlayColor='#000000'>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.datetime}>@ {item.starttime} - {item.endtime}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableHighlight>);

  }

  renderSectionHeader(sectionData, category) {
    return (<View>
      <Text style={styles.header}>{category}</Text>
    </View>);
  }

  render() {
    return (
      <View style={styles.container}>
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
