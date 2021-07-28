import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import Dashboard from '../screens/dashboard';
import Prayer from '../screens/dashboard/prayer-section';
import Media from '../screens/dashboard/media';
import Books from '../screens/dashboard/books';
import Giving from '../screens/dashboard/giving';
import LiveStream from '../screens/dashboard/live-screening';

const DashboardStack = createStackNavigator();

const DashboardNavigation = () => {
  return (
    <DashboardStack.Navigator initialRouteName="Dashboard" headerMode="none">
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      <DashboardStack.Screen name="Prayer" component={Prayer} />
      <DashboardStack.Screen name="Media" component={Media} />
      <DashboardStack.Screen name="Books" component={Books} />
      <DashboardStack.Screen name="Giving" component={Giving} />
      <DashboardStack.Screen name="LiveStream" component={LiveStream} />
    </DashboardStack.Navigator>
  );
};

export default DashboardNavigation;
