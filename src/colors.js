/**
 *  Colors used by light and dark mode that are shared and unique.
 */
const sharedColors = {
  white: '#FFFFFF',
  dark: '#303041',
  primary: '#3200C8',
  blue: '#0138FA',
  secondary: '#9D9DAC',
  gray: '#DBDAE6',
  gray100: '#888397',
  lightGray: '#F7F7FC',
  darkGray: '#E0DCEA',
  skyBlue: '#716EF6',
  lightSkyBlue: '#ECEBFD',
  pink: '#F86267',
  green: '#179F35',
  lightGreen: '#6ABAA7',
  red: '#DD3E0B',
  red500: '#F95C5C',
  yellow: '#FFE67B',
  snowMountain: '#D2DAF5',
  transparent: 'transparent',
  purple: '#8B03CA',
};

/**
 *  Default consumer APP Mode Unique Colors
 */
export const consumerNormalColors = {
  ...sharedColors,
  headerBg: '#2F2F3B',
};
/**
 *  Consumer APP Dark Mode Unique Colors
 */
export const consumerDarkColors = {
  ...sharedColors,
  headerBg: '#3C4954',
};
