import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRoutes} from './HomeNavigation';
import {connect} from 'react-redux';
// import {DashboardRoutes} from './DashboardNavigation';
import {ENV} from '../utils';

const Stack = createStackNavigator();

const AppNav = props => {
  const {isAuthenticated, isAwaitingVerification, loggedIn} = props;

  const myRef = React.createRef();

  let ActiveRoute = HomeRoutes;

  // const ActiveRoute = loggedIn ? DashboardRoutes : HomeRoutes;

  let {screenOptions, initialRoute} = ActiveRoute;
  if (!isAuthenticated && isAwaitingVerification) {
    initialRoute = 'EnterEmailToken';
  }

  return (
    <NavigationContainer ref={myRef}>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={screenOptions}>
        {ActiveRoute.routes.map((route, index) => (
          <Stack.Screen key={index} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
