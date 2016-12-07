import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles, {stylechoice} from '../helloworld/StyleSheet';

const Info_Icon = () => {
  return (<Ionicons style={styles.infoIcon} name= 'ios-information' size={30}
    color= {stylechoice.accentcolor} />
  );
};

module.exports = Info_Icon;
//export default Info_Icon;
