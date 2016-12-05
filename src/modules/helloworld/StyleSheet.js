import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch',
    width: Dimensions.get('window').width,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
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
    backgroundColor: '#E5ECEE',
    flex: 1
  },
  description: {
    fontSize: 15,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    alignItems: 'stretch'
  },
  datetime: {
    textAlign: 'left',
    fontSize: 15
  },
  header: {
    color: '#FFFFFF',
    backgroundColor: '#292650',
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    fontSize: 20
  },
  tabheader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
  },
  // slide1: {
  //   // flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  //   // backgroundColor: '#9DD6EB'
  slide2: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: '#97CAE5'
  },
  // slide3: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#92BBD9'
  // },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  favorites: {
    color: 'yellow',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  innerContainer: {
    // borderRadius: 10,
    alignItems: 'center',
    marginTop: 200,
    backgroundColor: 'white'
  }
});

export default styles;
