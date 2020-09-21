import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from '../screen/Welcome';

export const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome,
      }
    },
    {
      headerMode: 'none',
      initialRouteName: 'Welcome',
    },
  ),
);
