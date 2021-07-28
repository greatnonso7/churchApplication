import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderBar from '../../../shared/header-bar';
import {hp} from '../../../shared/responsive-dimension';
import {styles} from './style';

const Contact = props => {
  const {goBack} = props.navigation;
  return (
    <View style={styles.container}>
      <HeaderBar
        headerTitle={'Contact Us'}
        hasBackButton
        onPressLeftIcon={() => goBack()}
      />
      <View style={styles.body}>
        <Text style={styles.contactTextHeading}>Contact us</Text>

        <View style={styles.infoContainer}>
          <View style={styles.singleInfoItem}>
            <Ionicons name="mail" size={hp(30)} />
            <Text style={styles.emailText}>support@rccgrockchurch.com</Text>
          </View>
          <View style={styles.singleInfoItem}>
            <Ionicons name="md-phone-portrait-outline" size={hp(30)} />
            <Text style={styles.emailText}>+44 384-384-3847</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Text style={styles.contactTextHeading}>Location</Text>
        </View>
      </View>
    </View>
  );
};

export default Contact;
