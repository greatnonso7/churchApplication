import {StyleSheet} from 'react-native';
import {wp, hp, deviceWidth, paddingTopiOS} from '../responsive-dimension';
import {consumerNormalColors} from '../../colors';

import {globalStyle, colors} from '../../style';

const {main} = globalStyle(consumerNormalColors);
export const styles = StyleSheet.create({
  headerTitle: {
    ...main.mediumDarkText,
  },
  headerCenterIcon: {
    height: hp(40),
    width: hp(40),
    marginTop: hp(5),
    borderRadius: hp(20),
  },
  headerRightButtonTitle: {
    ...main.mediumDarkText,
    fontSize: hp(14),
  },
  headerRightIcon: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
    // borderWidth: 1,
  },
  headerLeftIcon: {
    height: wp(20),
    width: wp(20),
    resizeMode: 'contain',
    // tintColor: '',
  },
  headerLeftIconContainer: {
    position: 'absolute',
    left: wp(20),
    // borderWidth: 1,
  },
  headerRightIconContainer: {
    position: 'absolute',
    right: wp(20),
    // borderWidth: 1,
  },
  navBar: {
    width: '100%',
    backgroundColor: consumerNormalColors.headerBg,
    height: hp(44),
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: wp(20),
  },
  headerContainer: {
    width: deviceWidth,
    backgroundColor: consumerNormalColors.headerBg,
    paddingTop: paddingTopiOS,
  },
  buttonContainer: {
    width: wp(75),
    height: hp(60),
    justifyContent: 'flex-end',
    opacity: 0.8,
    paddingBottom: hp(14),
    paddingLeft: wp(12),
  },
});
