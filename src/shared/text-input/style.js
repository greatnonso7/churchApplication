import {StyleSheet, Platform} from 'react-native';
import {
  wp,
  hp,
  getStatusBarHeight,
  deviceHeight,
  deviceWidth,
} from '../../shared/responsive-dimension';
import {globalStyle} from '../../style';
import {consumerNormalColors as colors} from '../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  formControl: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    width: wp(335),
    height: hp(50),
    borderRadius: hp(10),
    marginBottom: hp(30),
  },
  formIcon: {
    color: '#000',
    alignSelf: 'center',
    marginLeft: hp(20),
  },
  formText: {
    ...main.normalText20,
    color: colors.dark,
    marginLeft: hp(10),
  },
});
