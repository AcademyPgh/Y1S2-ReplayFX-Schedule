import {StyleSheet, Dimensions} from 'react-native';
const fontName = 'Voces';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'black',
    fontSize: 23,
    fontFamily: fontName,
    paddingBottom: 2,
    paddingTop: 5
  },
  description: {
    fontSize: 15,
    fontFamily: fontName,
    color: 'black',
    paddingBottom: 2
  },
  datetime: {
    textAlign: 'left',
    fontSize: 15,
    color: '#5C5C5C',
    fontWeight: 'bold',
    paddingBottom: 2
  },
  header: {
    color: '#DBDDFF',
    backgroundColor: '#3B3D68',
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
    backgroundColor: 'white'
  },
  slide: {
    justifyContent: 'center',
    backgroundColor: '#9598C0'

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

  },

  infoIcon: {
    paddingTop: 5,
    paddingBottom: 0

  }


});

export default styles;
