import {StyleSheet, Dimensions} from 'react-native';
//italics and bold not available for this font so don't use them
export const stylechoice =
  {fontName: 'Voces',
//color is used for background of header, icons, color of active tab
    accentcolor: '#3B3D68',
// color is used for header text
    lightaccent: '#DBDDFF',
// color is used for background of slide
    lightalternate: '#9598C0',
// color is used for border of each container of listView
    bordercolor: '#CCCCCC',
//color is used for info
    infocolor: '#333333',
    regtextcolor: 'black',
    timeColor: '#5E5E5E',
    alttext: 'white',
    regbackground: 'white',
    inactive: 'grey'
  };
const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylechoice.regbackground
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10

  },
  instructions: {
    textAlign: 'center',
    color: stylechoice.infocolor,
    marginBottom: 5
  },
  title: {
    color: stylechoice.regtextcolor,
    fontSize: 23,
    fontFamily: stylechoice.fontName,
    paddingBottom: 2,
    paddingTop: 5
  },
  description: {
    fontSize: 15,
    fontFamily: stylechoice.fontName,
    color: stylechoice.regtextcolor,
    paddingBottom: 2
  },
  datetime: {
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    color: stylechoice.timeColor,
    paddingBottom: 2
  },

  header: {
    color: stylechoice.lightaccent,
    backgroundColor: stylechoice.accentcolor,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 25,
    fontFamily: stylechoice.fontName,
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
    backgroundColor: stylechoice.regbackground
  },
  slide: {
    justifyContent: 'center',
    backgroundColor: stylechoice.slidealternate
  },
  // slide3: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#92BBD9'
  text: {
    color: stylechoice.alttext,
    fontSize: 30,
    //fontWeight: 'bold',
    fontFamily: stylechoice.fontName
  },
  favorites: {
    color: stylechoice.accentcolor
  },
  unFavorites: {
    color: stylechoice.inactive
  },
  innerContainer: {
    alignItems: 'center',
    marginTop: 200,
    backgroundColor: stylechoice.regbackground

  },

  iconrowstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  info: {
    borderColor: stylechoice.bordercolor,
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

  },

  academy: {
    color: stylechoice.accentcolor,
    fontFamily: 'Voces',
    textAlign: 'center'

  },

  logoimage: {
    width: 200,
    height: 100
  },
  tab: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  tabcontainer: {
    height: 50,
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: stylechoice.bordercolor
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  gamecontroller: {
    fontSize: 15,
    color: stylechoice.accentcolor
  },

  tabUnderline: {

    position: 'absolute',
    height: 49,
    backgroundColor: stylechoice.lightaccent,
    bottom: 0,
    zIndex: -1
  }

});

export default styles;
