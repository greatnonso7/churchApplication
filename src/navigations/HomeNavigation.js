import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import Login from '../screens/onboarding/login';
import Onboarding from '../screens/onboarding';
import Register from '../screens/onboarding/register';

const AuthStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="Onboarding" headerMode="none">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default HomeNavigation;
