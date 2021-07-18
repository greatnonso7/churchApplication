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
    backgroundColor: colors.white,
  },
  imageBg: {
    height: deviceHeight,
    width: deviceWidth,
  },
  itemText: {
    ...main.boldText24,
    color: colors.white,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: hp(100),
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.dark,
    opacity: 0.7,
    borderRadius: hp(10),
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(10),
  },
  logo: {
    height: hp(80),
    width: wp(120),
  },
  iconBack: {
    height: hp(30),
    width: wp(30),
  },
  imageItem: {
    height: hp(140),
    width: wp(160),
    borderRadius: hp(10),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: hp(40),
    left: hp(20),
  },
  body: {
    marginTop: hp(10),
    marginHorizontal: hp(7),
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
  button: {
    backgroundColor: colors.gold,
  },

  buttonContainer: {
    marginTop: hp(210),
  },
});
