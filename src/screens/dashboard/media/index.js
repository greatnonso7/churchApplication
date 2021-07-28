/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import HeaderBar from '../../../shared/header-bar';

import {styles} from './style';
import constants from '../../../constants';
import {deviceWidth, hp} from '../../../shared/responsive-dimension';
import {consumerNormalColors as colors} from '../../../colors';

const mediaTabs = constants.mediaTabs.map(mediaTab => ({
  ...mediaTab,
  ref: React.createRef(),
}));

const TabIndicator = ({measureLayout, scrollX}) => {
  const inputRange = mediaTabs.map((_, i) => i * deviceWidth);
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: '100%',
        width: deviceWidth - (hp(12) * 2) / 2,
        borderRadius: hp(12),
        backgroundColor: colors.red,
        transform: [{translateX}],
      }}
    />
  );
};

const Tabs = ({scrollX, onMediaTabPress}) => {
  const [measureLayout, setMeasureLayout] = React.useState([]);

  console.log(measureLayout, 'measureLayout');

  const containerRef = React.useRef();

  React.useEffect(() => {
    let ml = [];
    mediaTabs.forEach(mediaTab => {
      mediaTab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({x, y, width, height});
        },
      );
      if (ml.length === mediaTabs.length) {
        setMeasureLayout(ml);
      }
    });
  }, [containerRef.current]);

  return (
    <View ref={containerRef} style={{flexDirection: 'row'}}>
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}

      {mediaTabs.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => onMediaTabPress()}
            key={`MediaTab-${index}`}
            style={{flex: 1}}>
            <View
              ref={item.ref}
              style={{
                paddingHorizontal: 15,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}>
              <Text style={{color: colors.white, fontSize: hp(17)}}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Media = props => {
  const {goBack} = props.navigation;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const mediaTabScrollViewRef = React.useRef();
  const onMediaTabPress = React.useCallback(mediaTabIndex => {
    mediaTabScrollViewRef?.current?.scrollToOffset({
      offset: mediaTabIndex * deviceWidth,
    });
  }, []);

  function renderTabBar() {
    return (
      <View
        style={{
          marginTop: hp(12),
          marginHorizontal: hp(12),
          borderRadius: hp(12),
          backgroundColor: colors.dark,
        }}>
        <Tabs scrollX={scrollX} onMediaTabPress={onMediaTabPress} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <HeaderBar
        hasBackButton
        headerTitle="Media"
        tintColor="#000"
        onPressLeftIcon={() => goBack()}
      />

      {renderTabBar()}
    </View>
  );
};

export default Media;
