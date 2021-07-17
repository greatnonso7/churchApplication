import {init} from '@rematch/core';
import logger from 'redux-logger';
import * as models from '../models';
import {loadingPlugin} from '../plugins';
import {persistPlugin} from '../persist';

export default init({
  models,
  plugins: [loadingPlugin, persistPlugin],
  redux: {},
});
