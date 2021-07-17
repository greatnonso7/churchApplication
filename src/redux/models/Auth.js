import {reducerActions as reducers} from './reducer';
import {AuthApi} from '../../services/apis';
import Snackbar from 'react-native-snackbar';
import {ENV, sleep} from '../../utils';
import {db} from '../../db';

const IsState = {
  isLoading: false,
  userProfile: null,
  userId: '',
  access_token: '',
  isServerError: false,
  awaitingVerification: false,
  unverifiedEmail: '',
  unverifiedCompanyName: '',
  loggedIn: true,
  lastLoginEmail: '',
  isLoggedIn: false,
};

const {demo} = ENV;

export const Auth = {
  name: 'Auth',
  state: IsState,
  reducers,
  effects: dispatch => ({
    async login(data, state) {
      dispatch.Auth.setError(false);
      try {
        const api = demo
          ? await sleep(500, db.auth.login)
          : await AuthApi.login(data);

        const {email} = data;
        console.log(api, 'user');

        if (api) {
          dispatch.Auth.setState({
            userProfile: api.user,
            access_token: api.token,
            isLoggedIn: true,
            lastLoginEmail: email,
          });
        }
      } catch (error) {
        this.handleError(error);
      }
    },

    async signUp(data, state) {
      dispatch.Auth.setError(false);
      try {
        const api = await AuthApi.signUp(data);
        return api;
      } catch (error) {
        this.handleError(error);
      }
    },

    async handleError(error) {
      console.log('===== AUTH ERROR =====', error);

      dispatch.Auth.setError(true);
      if (error?.message || error?.data?.status === 'error') {
        var message =
          error?.message ||
          error?.data?.message ||
          'An error occured. Please try again.';

        return Snackbar.show({
          text: message,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Close',
            textColor: 'green',
            onPress: () => {
              /* Do something. */
            },
          },
        });
      }
    },
  }),
};
