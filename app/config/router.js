import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../screens/Login';
import Feed from '../screens/Feed';
import MapPage from '../screens/MapPage';
import AddLocation from '../screens/AddLocation';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

export const PageStack = StackNavigator({
  Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      },
  },
  MapPage: {
    screen: MapPage,
    navigationOptions: {
      title: 'Map',
    },
  },
  AddLocation: {
    screen: AddLocation,
    navigationOptions: {
      title: 'Add Location',
    },
  },
  Details: {
    screen: UserDetail,
    headerMode: "Settings",
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
      },
    },
  MapPage: {
    screen: MapPage,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="place" size={35} color={tintColor} />,
    },
  },
  AddLocation: {
    screen: AddLocation,
    navigationOptions: {
      tabBarLabel: 'Add Location',
      tabBarIcon: ({ tintColor }) => <Icon name="add" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
