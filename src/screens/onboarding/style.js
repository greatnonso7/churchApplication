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
  container: {
    // alignItems: 'center',
    paddingHorizontal: wp(20),
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(true) : 0,
    backgroundColor: colors.white,
    flex: 1,
  },
  verticalClaneLogo: {
    position: 'absolute',
    zIndex: -1,
    right: -hp(64),
    top: hp(100),
  },
  welcomeText: {
    ...main.boldText36,
  },
  imageBg: {
    height: deviceHeight,
    width: deviceWidth,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.purple,
    opacity: 0.4,
  },

  body: {
    marginTop: hp(196),
    width: '100%',
    marginBottom: hp(220),
    alignSelf: 'flex-start',
  },
  underline: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dark,
  },
  loginButtonText: {
    ...main.normalText16,
  },
  buttonText: {
    ...main.normalText16,
    color: colors.primary,
  },
  termsText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...main.normalText12,
  },
  loginButton: {
    backgroundColor: colors.white,
    borderRadius: hp(8),
    borderWidth: 1,
    borderColor: '#303041',
    width: wp(335),
    height: hp(56),
    marginTop: hp(10),
  },
  button: {
    backgroundColor: colors.dark,
    width: wp(335),
    height: hp(56),
  },
});
