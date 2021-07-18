import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './HomeNavigation';
import Dashboard from './DashboardNavigation';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
