import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF'
    // backgroundColor: 'lightsteelblue'
  //  backgroundColor: '#a5bcd9'
    backgroundColor: 'white'

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
    color: '#1A1B2E',
    //color: '#52527a',
    fontSize: 15,
    fontFamily: 'GillSans-UltraBold'
    //textAlign: 'center'
  //  backgroundColor: '#E5ECEE'
  },
  description: {
    fontSize: 15,
    fontFamily: 'GillSans-Bold',
    //color: 'snow'
    //color: '#52527a'
    color: 'black'
  },
  datetime: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'GillSans-Bold',
  //  color: 'snow'
    //color: '#52527a'
    color: 'black'
  },
  header: {
    color: '#FFFFFF',
    // backgroundColor: '#292650',
    backgroundColor: '#260099',
    //backgroundColor: '#1A1B2E',
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: 'GillSans-Bold',
    textAlign: 'center'

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
    //backgroundColor: '#a5bcd9'
    backgroundColor: 'white'
  },
  slide: {
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  //  backgroundColor: '#97CAE5'
    backgroundColor: 'white'
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
    color: 'gold'
  },
  unFavorites: {
    color: '#260099'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 220,
    backgroundColor: 'white'

  },
  info: {
    borderColor: '#ccc',
    borderBottomWidth: 2,
    width: Dimensions.get('window').width

  }
});

export default styles;
