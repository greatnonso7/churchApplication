import {StyleSheet} from 'react-native';
import {wp, getBottomSpace, hp} from '../responsive-dimension';
import {get} from 'lodash';
import {globalStyle} from '../../style';
import {consumerNormalColors as colors} from '../../colors';

const {main, semiBold} = globalStyle(colors);

//
export const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: hp(40) + getBottomSpace(),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTitle: {
    // ...main.textWhite,
    // ...globalStyle.medium,
    ...main.boldText16,
    color: colors.white,
    alignSelf: 'center',
  },
  longButton: {
    backgroundColor: colors.dark,
    borderRadius: wp(8),
    width: wp(335),
    height: hp(56),
  },
});
