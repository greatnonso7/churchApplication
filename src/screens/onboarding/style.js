import {StyleSheet} from 'react-native';
import {
  wp,
  hp,
  deviceWidth,
  deviceHeight,
} from '../../shared/responsive-dimension';
import {globalStyle} from '../../style';
import {consumerNormalColors as colors} from '../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  imageStyle: {
    height: deviceHeight,
    width: deviceWidth,
  },
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.2,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: hp(200),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: colors.white,
    marginLeft: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: hp(240),
    right: hp(10),
  },
  text: {
    ...main.semiBoldText36,
    color: colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginHorizontal: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp(30),
  },
  loginButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: colors.purple,
    borderWidth: hp(1),
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
    marginTop: hp(20),
  },
  loginText: {
    ...main.normalText20,
    color: colors.purple,
  },
  registerText: {
    ...main.normalText20,
    color: colors.white,
  },
  registerButton: {
    width: wp(328),
    height: hp(60),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(10),
  },
  buttonStyle: {
    marginTop: hp(30),
  },
});
