import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';

import {styles} from './style';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../assets/images/image-bg.jpg')}
          style={styles.imageBg}>
          <View style={styles.overlay} />

          <View style={styles.body}>
            <Text>Hello world</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Onboarding;
