/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Animated} from 'react-native';

import {mediaTabs} from '../../constants';
import {deviceWidth, hp} from '../responsive-dimension';
import {consumerNormalColors as colors} from '../../colors';
import {TouchableOpacity} from 'react-native';

const mediaItemTabs = mediaTabs.map(mediaTab => ({
  ...mediaTab,
  ref: React.createRef(),
}));

const TabIndicator = ({measureLayout, scrollX}) => {
  const inputRange = mediaItemTabs.map((_, i) => i * deviceWidth);
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
        width: deviceWidth - hp(50) / 2,
        borderRadius: hp(20),
        backgroundColor: colors.dark,
        transform: [{translateX}],
      }}
    />
  );
};

const Tabs = ({scrollX, onMediaTabPress}) => {
  const [measureLayout, setMeasureLayout] = React.useState([]);

  const containerRef = React.useRef();

  React.useEffect(() => {
    let ml = [];
    mediaItemTabs.forEach(mediaTab => {
      mediaTab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({x, y, width, height});
        },
      );

      if (ml.length === mediaItemTabs.length) {
        setMeasureLayout(ml);
      }
    });
  }, [containerRef.current]);

  return (
    <View ref={containerRef} style={{flexDirection: 'row'}}>
      {measureLayout > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}

      {mediaItemTabs.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => onMediaTabPress()}
            key={`mediatab-${index}`}
            style={{flex: 1}}>
            <View
              ref={item.ref}
              style={{
                paddingHorizontal: 15,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}>
              <Text style={{color: colors.dark}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabs;
