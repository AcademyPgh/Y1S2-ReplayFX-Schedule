import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF'
    // backgroundColor: 'lightsteelblue'
    backgroundColor: '#a5bcd9'

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
    //color: '#333333',
    color: '#52527a',
    fontSize: 15,
    fontFamily: 'GillSans-UltraBold',
    backgroundColor: '#E5ECEE'
  },
  description: {
    fontSize: 15,
    fontFamily: 'GillSans-Bold',
    color: 'snow'
    //color: '#52527a'
  },
  datetime: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'GillSans-Bold',
    color: 'snow'
    //color: '#52527a'
  },
  header: {
    color: '#FFFFFF',
    // backgroundColor: '#292650',
    backgroundColor: '#260099',
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: 'GillSans-Bold'

  },
  tabheader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
  },
  home: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'lightsteelblue'
    backgroundColor: '#a5bcd9'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  favorites: {
    color: 'yellow',
    fontWeight: 'bold'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 220,
    backgroundColor: 'white'

  }
});

export default styles;
