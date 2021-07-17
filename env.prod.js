export default {
  name: 'prod',
  baseUrl: 'http://claneapp.dev.clane.com/api',
  claneApi: 'https://api.clane.com/api/v1',
  socialUrl: 'http://social.dev.clane.com/',
  qrURl: 'http://merchant.dev2.clane.com:9003/',
  isLoggedIn: false,
  keys: {
    deviceId: '@DEVICE_ID',
    authId: '@AUTH_ID',
    accessId: '@AUTH_ACCESS_ID',
    refreshId: '@AUTH_REFRESH_ID',
  },
  page: {
    limit: 50,
    current: 1,
  },
  demo: false,
  version: '1.0.0',
};
