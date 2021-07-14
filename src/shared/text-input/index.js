import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

import {styles} from './style';

const {width} = Dimensions.get('screen');

const Input = ({placeholder}) => {
  return (
    <View style={styles.formControl}>
      <TextInput
        style={styles.formText}
        placeholder={placeholder}
        placeholderTextColor="#000"
      />
    </View>
  );
};

export default Input;
