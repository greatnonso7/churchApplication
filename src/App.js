/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';

import AppNavigation from './navigations';

if (!__DEV__) {
  console.log = () => null;
}

console.warn = () => {};
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <AppNavigation />
    </>
  );
};

export default App;
