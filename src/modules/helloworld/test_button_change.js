import React, {Component} from 'react';
import {
  Text
} from 'react-native';
export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }
  handleClick() {
    this.setState({
      isSelected: true
    });
  }
  render() {
    var isSelected = this.state.isSelected;
    var style = {
      'background-color': ''
    };
    if (isSelected) {
      style = {
        'background-color': '#ccc'
      };
    }
    return (
           <Text onClick={this.handleClick} style={style}>[*]</Text>
    );
  }
}
