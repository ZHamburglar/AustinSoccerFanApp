import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { View, Platform, Image, Text } from 'react-native';


import store from './store';
import MainScreen from './screens/MainScreen';

export default class App extends Component {
  render() {
      const MainNavigator = createStackNavigator({
        Main: { screen: MainScreen }
      });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
