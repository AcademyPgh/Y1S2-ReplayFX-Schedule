import {StyleSheet, Dimensions} from 'react-native';
const fontName = 'Voces';
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
    // color: '#1A1B2E',
    //color: '#52527a',
    color: 'black',
    fontSize: 23,
    fontFamily: fontName,
    //fontWeight: 'bold',
    paddingBottom: 2
    //textAlign: 'center'
  //  backgroundColor: '#E5ECEE'
  },
  description: {
    fontSize: 15,
    fontFamily: fontName,
    //color: 'snow'
    //color: '#52527a'
    color: 'black',
    paddingBottom: 2
  },
  datetime: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: fontName,
  //  color: 'snow'
    //color: '#52527a'
    color: 'black',
    paddingBottom: 2
  },
  header: {
    color: '#DBDDFF',
    // backgroundColor: '#292650',
    backgroundColor: '#3B3D68',
    //backgroundColor: '#1A1B2E',
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 25,
    fontFamily: fontName,
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
    backgroundColor: '#9598C0'
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
    fontWeight: 'bold',
    fontFamily: fontName
  },
  favorites: {
    color: '#3B3D68'
  },
  unFavorites: {
    color: 'grey'
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
    width: Dimensions.get('window').width,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10

  }
});

export default styles;
