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
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: hp(0),
    left: hp(10),
  },
  singleInfoItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  locationContainer: {
    marginTop: hp(30),
    marginHorizontal: hp(20),
  },
  infoContainer: {
    marginTop: hp(30),
    marginHorizontal: hp(20),
  },
  emailText: {
    ...main.normalText20,
    paddingLeft: hp(10),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.dark,
    opacity: 0.7,
    borderRadius: hp(20),
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: hp(10),
    height: hp(180),
    backgroundColor: colors.dark,
    width: wp(100),
    borderRadius: hp(15),
  },
  contactTextHeading: {
    ...main.boldText20,
    marginLeft: hp(10),
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
    height: hp(120),
    width: wp(90),
    position: 'absolute',
    bottom: hp(50),
    borderRadius: hp(3),
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
    marginTop: hp(30),
    marginHorizontal: hp(10),
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
