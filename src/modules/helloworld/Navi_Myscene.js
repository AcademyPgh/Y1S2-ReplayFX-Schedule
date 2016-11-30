import React, {Component} from 'react';
import MyScene from './MyScene';
import {
  Navigator
} from 'react-native';

export default class Navi extends Component {
  render() {
    return (
      <Navigator
      initialRoute={{title: 'My Initial Scene', index: 0}}
      renderScene={(route, navigator) =>
        <MyScene title= {route.title}
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
      }
    />
    );
  }
}
