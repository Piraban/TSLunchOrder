import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer , createSwitchNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import Favorites from './screens/Favorites';
import Orders from './screens/Orders';
import Profile from './screens/Profile';
import Setting from './screens/Setting';
import Options from './screens/Options';
import Login from './screens/Login'
import colors from './utils/colors';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);



const OrdersScreens = createStackNavigator(
  {
    Orders,
    Profile,
  },
  {
    initialRouteName: 'Orders',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('list'),
    },
  },
);

const FavoritesScreens = createStackNavigator(
  {
    Favorites,
    Profile,
  },
  {
    initialRouteName: 'Favorites',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('star'),
    },
  },
);

const SettingScreens = createStackNavigator(
  {
    Setting,
    Options,
  },
  {
    mode: 'modal',
    initialRouteName: 'Setting',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person'),
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Orders: OrdersScreens,
    Favorites: FavoritesScreens,
    Setting: SettingScreens,
  },
  {
    initialRouteName: 'Orders',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight,
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
    },
  },
);


export default createAppContainer(createSwitchNavigator(
  {
    App: TabNavigator,
    Auth: Login,
  },
  {
    initialRouteName: 'Auth',
  }
));
//export default createAppContainer(TabNavigator);
