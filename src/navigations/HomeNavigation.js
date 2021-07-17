import Welcome from '../screens/onboarding';
import Login from '../screens/onboarding/login';
import Register from '../screens/onboarding/register';

export const HomeRoutes = {
  initialRoute: 'Home',
  screenOptions: {
    headerShown: false,
    header: null,
    gestureEnabled: false,
  },
  routes: [
    {
      name: 'Home',
      component: Welcome,
    },
    {
      name: 'Login',
      component: Login,
    },
    {
      name: 'Register',
      component: Register,
    },
  ],
};
