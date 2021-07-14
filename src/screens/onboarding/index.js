import React from 'react';
import {View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';

import {styles} from './style';

import TextInput from '../../shared/text-input';
import LongButton from '../../shared/long-button';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/image-bg.jpg')}
        style={styles.imageBg}>
        <View style={styles.overlay} />

        <View style={styles.body}>
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.formContainer}>
            <TextInput placeholder="Full Name" />
            <TextInput placeholder="Phone Number" />

            <View style={styles.buttonContainer}>
              <LongButton
                buttonStyle={[styles.button]}
                isNotBottom
                title="Login Account"
              />
              <Text>Already have an account</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Onboarding;
