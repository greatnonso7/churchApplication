import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import HeaderBar from '../../../shared/header-bar';
import {
  deviceHeight,
  deviceWidth,
  hp,
} from '../../../shared/responsive-dimension';
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
            <Text style={styles.emailText}>01332340930, </Text>
            <Text style={styles.emailText}>07766054917</Text>
          </View>
        </View>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.contactTextHeading}>Location</Text>

        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{height: deviceHeight * 0.57, width: deviceWidth}}
          region={{
            latitude: 52.91633,
            longitude: -1.48446,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}>
          <Marker
            coordinate={{
              latitude: 52.91633,
              longitude: -1.48446,
            }}
          />
        </MapView>
      </View>
    </View>
  );
};

export default Contact;
