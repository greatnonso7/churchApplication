import {TouchableOpacity, View, Text, Image} from 'react-native';
import {styles} from './style';
import React from 'react';

import {hp, getStatusBarHeight, wp} from '../responsive-dimension';
import {colors} from '../../style';
import backIcon from '../../assets/images/icons/back.png';

const HeaderBar = ({
  tintColor,
  backgroundColor,
  headerRight,
  headerLeft,
  headerTitle,
  leftIcon,
  rightIcon,
  leftIconStyle,
  rightIconStyle,
  onPressRightIcon,
  onPressLeftIcon,
  headerRightStyle,
  hasBackButton,
  leftHeaderStyle,
  headerRightButtonTitle,
  headerCenter,
  headerCenterIcon,
  headerCenterIconStyle,
  profile,
}) => {
  const renderHeaderLeft = () => {
    if (headerLeft) {
      return (
        <View style={styles.headerLeftIconContainer}>
          <Text style={leftHeaderStyle}>{headerLeft}</Text>
        </View>
      );
    }
    if (leftIcon || hasBackButton) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressLeftIcon}
          style={styles.headerLeftIconContainer}>
          <Image
            source={leftIcon || backIcon}
            style={[styles.headerLeftIcon, leftIconStyle, {tintColor}]}
          />
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderRight = () => {
    if (headerRight) {
      return (
        <View style={[styles.headerRightIconContainer]}>
          <Text style={{color: tintColor}}>{headerRight}</Text>
        </View>
      );
    }
    if (rightIcon) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressRightIcon}
          style={[
            styles.headerRightIconContainer,
            profile
              ? {
                  height: 37,
                  width: 37,
                  borderWidth: 2,
                  borderColor: '#566877',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }
              : null,
          ]}>
          <Image
            source={rightIcon}
            style={[styles.headerRightIcon, rightIconStyle, {tintColor}]}
          />
        </TouchableOpacity>
      );
    }
    if (headerRightButtonTitle) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressRightIcon}
          style={styles.headerRightIconContainer}>
          <Text style={[styles.headerRightButtonTitle, {color: tintColor}]}>
            {headerRightButtonTitle}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <Text style={[styles.headerTitle, {color: tintColor}]}>
          {headerTitle}
        </Text>
      );
    }
    if (headerCenter) {
      return headerCenter;
    }
    if (headerCenterIcon) {
      return (
        <View>
          <Image
            source={headerCenterIcon}
            style={[styles.headerCenterIcon, headerCenterIconStyle]}
            resizeMode={'cover'}
          />
        </View>
      );
    }
  };

  return (
    <View
      style={[
        styles.headerContainer,
        {backgroundColor: backgroundColor || '#fff'},
      ]}>
      <View
        style={[styles.navBar, {backgroundColor: backgroundColor || '#fff'}]}>
        {renderHeaderLeft()}

        {renderHeaderTitle()}

        {renderHeaderRight()}
      </View>
    </View>
  );
};

const hitSlop = {top: 10, left: 10, right: 10, bottom: 10};

export default HeaderBar;
