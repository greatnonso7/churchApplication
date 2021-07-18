import {StyleSheet} from 'react-native';
import {
  wp,
  hp,
  deviceHeight,
  deviceWidth,
} from '../../../shared/responsive-dimension';
import {globalStyle} from '../../../style';
import {consumerNormalColors as colors} from '../../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: hp(15),
  },
  imageBg: {
    height: deviceHeight,
    width: deviceWidth,
  },
  itemText: {
    ...main.normalText14,
    color: colors.white,
  },
  itemHeader: {
    ...main.semiBoldText14,
  },
  textContainer: {
    maxWidth: hp(240),
  },
  accountName: {
    ...main.normalText16,
    paddingRight: hp(20),
    color: colors.white,
  },

  accountNumber: {
    ...main.normalText16,
    paddingRight: hp(20),
    color: colors.white,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.dark,
    opacity: 0.7,
    borderRadius: hp(20),
  },
  itemContainer: {
    margin: hp(10),
    height: hp(200),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(350),
    borderWidth: hp(2),
    borderRadius: hp(15),
  },
  logo: {
    height: hp(120),
    width: wp(120),
  },
  iconBack: {
    height: hp(30),
    width: wp(30),
  },
  imageItem: {
    height: hp(90),
    width: wp(90),
    marginLeft: hp(5),
    borderRadius: hp(5),
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
    marginHorizontal: hp(5),
  },
  formContainer: {
    marginTop: hp(20),
  },
  loginButtonText: {
    ...main.normalText16,
  },
  buttonText: {
    ...main.normalText16,
    color: colors.dark,
  },
  termsText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...main.normalText16,
    maxWidth: hp(330),
    paddingLeft: hp(10),
  },
  button: {
    backgroundColor: colors.gold,
  },

  buttonContainer: {
    marginTop: hp(210),
  },
});
