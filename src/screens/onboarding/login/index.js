import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import {styles} from './style';

import TextInput from '../../../shared/text-input';
import LongButton from '../../../shared/long-button';
import {sharedImages} from '../../../images';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <ImageBackground
        source={require('../../../assets/images/image-bg.jpg')}
        style={styles.imageBg}>
        <View style={styles.overlay} />
        <TouchableOpacity
          onPress={() => goBack()}
          style={styles.backButtonContainer}>
          <Image
            source={sharedImages.back}
            resizeMode="contain"
            style={styles.iconBack}
          />
        </TouchableOpacity>

        <View style={styles.body}>
          <Image
            source={require('../../../assets/images/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <View style={styles.formContainer}>
            <TextInput placeholder="Full Name" />
            <TextInput placeholder="Phone Number" />

            <View style={styles.buttonContainer}>
              <LongButton
                onPress={() => this.props.navigation.navigate('Dashboard')}
                buttonStyle={[styles.button]}
                isNotBottom
                title="Login Account"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
