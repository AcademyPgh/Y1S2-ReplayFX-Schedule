import {Component} from 'react';
import {AppState} from 'react-native';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5,
      faves: this.props.favorites
    };
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('NOTIFICATION:', notification);
      }
    });

  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      if (this.state.faves.isFavorite) {
        //console.log(this.state.faves.date);
        PushNotification.localNotificationSchedule({
          message: this.state.faves.title + ' is about to begin in 15 minutes',
          date: new Date(Date.now() + (this.state.seconds * 1000))
        });
      }
    }
  }
  render() {
    return null;
  }
}
