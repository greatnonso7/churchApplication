import {wp, hp} from './shared/responsive-dimension';
import {isIOS} from './utils';

const font = {
  fontFamily: 'JosefinSans-Regular',
};

export const bold = isIOS
  ? {
      fontFamily: 'JosefinSans-Regular',
      fontWeight: 'bold',
    }
  : {
      fontFamily: 'JosefinSans-Bold',
    };

export const semiBold = isIOS
  ? {
      fontFamily: 'JosefinSans-Regular',
      fontWeight: '600',
    }
  : {
      fontFamily: 'JosefinSans-SemiBold',
    };

export const light = isIOS
  ? {
      fontFamily: 'JosefinSans-Regular',
      fontWeight: '300',
    }
  : {
      fontFamily: 'JosefinSans-Light',
    };

export const normal = {
  fontFamily: 'JosefinSans-Regular',
};

export const appFont = {
  fontFamily: 'JosefinSans-Regular',
};

const biggerFont = {
  ...font,
  fontSize: hp(20),
  lineHeight: hp(30),
};

const bigFont = {
  ...font,
  fontSize: hp(16),
  lineHeight: hp(24),
};

const normalFont = {
  ...font,
  fontSize: hp(14),
  lineHeight: hp(21),
};

const smallFont = {
  ...font,
  fontSize: hp(12),
  lineHeight: hp(18),
};

const buttonSolid = {
  height: 48,
  borderRadius: 8,
};

export const globalStyle = colors => ({
  colors,
  font,
  light,
  semiBold,
  bold,
  buttonSolid,
  main: {
    //new sizes
    lightText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...light,
      color: colors.dark,
    },

    lightText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...light,
      color: colors.dark,
    },

    lightText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...light,
      color: colors.dark,
    },

    lightText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...light,
      color: colors.dark,
    },

    lightText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...light,
      color: colors.dark,
    },

    lightText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...light,
      color: colors.dark,
    },
    lightText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...light,
      color: colors.dark,
    },
    lightText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...light,
      color: colors.dark,
    },

    //light
    boldText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...bold,
      color: colors.dark,
    },

    boldText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...bold,
      color: colors.dark,
    },

    boldText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...bold,
      color: colors.dark,
    },

    boldText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...bold,
      color: colors.dark,
    },

    boldText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...bold,
      color: colors.dark,
    },

    boldText22: {
      fontSize: hp(22),
      lineHeight: hp(33),
      ...bold,
      color: colors.dark,
    },

    boldText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...bold,
      color: colors.dark,
    },

    boldText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...bold,
      color: colors.dark,
    },
    boldText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...bold,
      color: colors.dark,
    },

    boldText48: {
      fontSize: hp(48),
      lineHeight: hp(54),
      ...bold,
      color: colors.dark,
    },

    //blue
    semiBoldText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...semiBold,
      color: colors.dark,
    },

    semiBoldText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...semiBold,
      color: colors.dark,
    },

    semiBoldText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...semiBold,
      color: colors.dark,
    },

    semiBoldText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...semiBold,
      color: colors.dark,
    },

    semiBoldText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...semiBold,
      color: colors.dark,
    },
    semiBoldText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...semiBold,
      color: colors.dark,
    },
    semiBoldText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...semiBold,
      color: colors.dark,
    },
    semiBoldText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...semiBold,
      color: colors.dark,
    },

    //white
    normalText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...normal,
      color: colors.dark,
    },

    normalText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...normal,
      color: colors.dark,
    },

    normalText13: {
      fontSize: hp(13),
      lineHeight: hp(19),
      ...normal,
      color: colors.dark,
    },

    normalText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...normal,
      color: colors.dark,
    },

    normalText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...normal,
      color: colors.dark,
    },

    normalText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...normal,
      color: colors.dark,
    },

    normalText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...normal,
      color: colors.dark,
    },
    normalText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...normal,
      color: colors.dark,
    },
    normalText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...normal,
      color: colors.dark,
    },

    //oldText
    biggerWhiteFont: {
      color: colors.white,
      ...biggerFont,
    },
    biggerDarkFont: {
      color: colors.dark,
      ...biggerFont,
    },
    biggerGrayFont: {
      color: colors.secondary,
      ...biggerFont,
    },
    biggerBlueFont: {
      color: colors.primary,
      ...biggerFont,
    },

    bigWhiteFont: {
      color: colors.white,
      ...bigFont,
    },
    bigDarkFont: {
      color: colors.dark,
      ...bigFont,
    },
    bigGrayFont: {
      color: colors.secondary,
      ...bigFont,
    },
    bigBlueFont: {
      color: colors.primary,
      ...bigFont,
    },

    smallWhiteFont: {
      color: colors.white,
      ...smallFont,
    },
    smallDarkFont: {
      color: colors.dark,
      ...smallFont,
    },
    smallGrayFont: {
      color: colors.secondary,
      ...smallFont,
    },
    smallBlueFont: {
      color: colors.primary,
      ...smallFont,
    },

    normalWhiteFont: {
      color: colors.white,
      ...normalFont,
    },

    normalDarkFont: {
      ...normalFont,
      color: colors.dark,
    },
    normalGrayFont: {
      color: colors.secondary,
      ...normalFont,
    },
    normalBlueFont: {
      color: colors.primary,
      ...normalFont,
    },

    //Medium Texts
    mediumDarkText: {
      ...semiBold,
      color: colors.dark,
      fontSize: hp(16),
      lineHeight: hp(24),
    },
    //---End of Medium text--//

    //Bold Texts
    boldWhiteText: {
      ...bold,
      color: colors.white,
      fontSize: hp(16),
      lineHeight: hp(24),
    },

    bgDark: {
      backgroundColor: colors.dark,
    },
    bgBlack: {
      backgroundColor: colors.black,
    },
    bgWhite: {
      backgroundColor: colors.bgWhite,
    },
    bgGray: {
      backgroundColor: colors.gray,
    },
    bgLightGray: {
      backgroundColor: colors.lightGray,
    },
    bgPrimary: {
      backgroundColor: colors.primary,
    },
    bgSuccess: {
      backgroundColor: colors.success,
    },
    textDark: {
      color: colors.dark,
      ...font,
    },
    textBlack: {
      color: colors.black,
      ...font,
    },
    textWhite: {
      color: colors.textWhite,
      ...font,
    },
    textWarning: {
      color: colors.warning,
      ...font,
    },
    textDanger: {
      color: colors.danger,
      ...font,
    },
    textPrimary: {
      color: colors.textPrimary,
      ...font,
    },
    textSuccess: {
      color: colors.success,
      ...font,
    },
    JosefinSansRegular: {
      fontFamily: 'JosefinSans-Regular',
    },
    JosefinSansBlack: {
      fontFamily: 'JosefinSans-Black',
    },
    JosefinSansBold: {
      fontFamily: 'JosefinSans-Bold',
    },
    buttonSolidPrimary: {
      backgroundColor: colors.textPrimary,
      ...buttonSolid,
    },
  },
});
