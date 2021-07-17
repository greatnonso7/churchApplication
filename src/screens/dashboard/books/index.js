import React from 'react';
import {View, Text} from 'react-native';
import HeaderBar from '../../../shared/header-bar';

import {styles} from './style';

class Books extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {goBack, navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderBar
          hasBackButton
          headerTitle="Books"
          tintColor="#000"
          onPressRightIcon={() => goBack()}
        />
      </View>
    );
  }
}

export default Books;