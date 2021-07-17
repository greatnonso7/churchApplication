import {Platform} from 'react-native';

import EnvDev from '../../env.dev';
import EnvProd from '../../env.prod';

export const isIOS = Platform.OS === 'ios';

export const sleep = async (ms: number, data = null) => {
  return new Promise(resolve => setTimeout(() => resolve(data), ms));
};

export const ENV = __DEV__ ? EnvDev : EnvProd; // Environment Management
