/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigations';

if (!__DEV__) {
  console.log = () => null;
}

console.warn = () => {};
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
