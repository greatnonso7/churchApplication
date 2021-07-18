import React from 'react';
import {
  TransitionPresets,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import Dashboard from '../screens/dashboard';
import Media from '../screens/dashboard/media';
import Books from '../screens/dashboard/books';
import Giving from '../screens/dashboard/giving';

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
    {name: 'Media', component: Media},
    {name: 'Books', component: Books},
    {name: 'Giving', component: Giving},
  ],
};
