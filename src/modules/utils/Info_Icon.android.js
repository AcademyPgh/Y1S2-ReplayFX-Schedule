import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles, {stylechoice} from '../helloworld/StyleSheet';

const Info_Icon = () => {
  return (<Ionicons style={styles.infoIcon} name= 'ios-information-circle' size={30}
    color= {stylechoice.accentcolor} />
  );
};
export default Info_Icon;
