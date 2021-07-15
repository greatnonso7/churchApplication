/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, Text, ImageBackground} from 'react-native';
import {styles} from './style';
import {sharedImages} from '../../images';
import {deviceWidth} from '../../shared/responsive-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Onboarding = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / deviceWidth);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage: pageIndex} = sliderState;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled={true}
        onScroll={event => {
          setSliderPage(event);
        }}>
        <View style={styles.contentContainer}>
          <ImageBackground
            source={sharedImages.praise1}
            resizeMode="cover"
            style={styles.imageStyle}>
            <View style={styles.overlay} />

            <View style={styles.textContainer}>
              <Text style={styles.text}>
                But{'\n'}First{'\n'}Pray
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.contentContainer}>
          <ImageBackground
            source={sharedImages.praise2}
            resizeMode="cover"
            style={styles.imageStyle}>
            <View style={styles.overlay} />

            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Dream{'\n'}Shine{'\n'}Sparkle
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.contentContainer}>
          <ImageBackground
            source={sharedImages.praise3}
            resizeMode="cover"
            style={styles.imageStyle}>
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Faith{'\n'}Over{'\n'}Fear
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              {opacity: pageIndex === index ? 1 : 0.6},
            ]}
            key={index}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => true}
          style={styles.registerButton}>
          <Text style={styles.loginText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={() => true}>
          <Text style={styles.registerText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
