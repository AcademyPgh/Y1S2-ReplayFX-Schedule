import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles, {stylechoice} from '../helloworld/StyleSheet';

const Info_Icon = () => {
  return (<Ionicons style={styles.infoIcon} name= 'ios-information' size={36}
    color= {stylechoice.accentcolor} paddingTop= {3} paddingBottom= {3} paddingLeft= {3} paddingRight= {3} />
  );
};

module.exports = Info_Icon;
//export default Info_Icon;
