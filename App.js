import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { View, Platform, Image, Text } from 'react-native';


import store from './store';
import MainScreen from './screens/MainScreen';
import MapScreen from './screens/MapScreen';

import Settings from './screens/Settings';

export default class App extends Component {
  render() {
      const MainNavigator = createStackNavigator({
        Main: { screen: MainScreen },
        Settings: { screen: Settings},
        MapScreen: { screen: MapScreen}
      },
      {
        initialRouteName: 'Settings'
      }
    );

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
