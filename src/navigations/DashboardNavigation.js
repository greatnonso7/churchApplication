import React from 'react';
import {
  TransitionPresets,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import Dashboard from '../screens/dashboard';

export const DashboardRoutes = {
  initialRoute: 'Dashboard',
  screenOptions: {
    headerShown: false,
    header: null,
    gestureEnabled: false,
  },
  routes: [
    {
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
};
