import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../helloworld/StyleSheet';

const Info_Icon = () => {
  return (<Ionicons style={styles.infoIcon} name= 'ios-information' size={30}
    color= '#3B3D68' />
  );
};

module.exports = Info_Icon;
//export default Info_Icon;
