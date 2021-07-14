import {StyleSheet} from 'react-native';
import {
  wp,
  hp,
  deviceHeight,
  deviceWidth,
} from '../../shared/responsive-dimension';
import {globalStyle} from '../../style';
import {consumerNormalColors as colors} from '../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  container: {
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
    backgroundColor: colors.blue,
    opacity: 0.2,
  },
  logo: {
    height: hp(200),
    width: wp(200),
  },

  body: {
    marginTop: hp(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: hp(20),
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

  buttonContainer: {
    marginTop: hp(200),
  },
});
