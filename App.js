import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { createStackNavigator, createBottomTabNavigator,createMaterialBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { View, Platform, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';





import store from './store';
import MainScreen from './screens/MainScreen';
import SupportersGroups from './screens/SupportersGroups'
import MapScreen from './screens/MapScreen';
import CalendarScreen from './screens/CalendarScreen';


import Settings from './screens/Settings';

export default class App extends Component {
  render() {
    //   const MainNavigator = createStackNavigator({
    //     Main: { screen: MainScreen },
    //     Settings: { screen: Settings},
    //     MapScreen: { screen: MapScreen}
    //   },
    //   {
    //     initialRouteName: 'MapScreen'
    //   }
    // );

    const IndexPage = createMaterialBottomTabNavigator({
      MainScreen: {
        screen: MainScreen,
        navigationOptions: () => {
          return {
            title: "News",
            tabBarIcon: (
              <MaterialIcons
                name="home"
                color="white"
                size={24}
              />
            )
          }
        },
      },

      Calendar: {
        screen: CalendarScreen,
        navigationOptions: () => {
          return {
            title: "Calendar",
            tabBarIcon: (
              <MaterialIcons
                name="assignment"
                color="white"
                size={24}
              />
            )
          }
        },
      },

      SupportersGroups: {
        screen: SupportersGroups,
        navigationOptions: () => {
          return {
            title: "SG's",
            tabBarIcon: (
              <MaterialIcons
                name="home"
                color="white"
                size={24}
              />
            )
          }
        },
      },

      MapScreen: {
        screen: MapScreen,
        navigationOptions: () => {
          return {
            title: "Map",
            tabBarIcon: (
              <MaterialIcons
                name="map"
                color="white"
                size={24}
              />
            )
          }
        },
      },

      Settings: {
        screen: Settings,
        navigationOptions: () => {
          return {
            title: "Settings",
            tabBarIcon: (
              <MaterialIcons
                name="settings"
                color="white"
                size={24}
              />
            )
          }
        },
      }

    },
    
     {
      initialRouteName: 'MapScreen',
      activeTintColor: '#f0edf6',
      inactiveTintColor: '#3e2465',
      barStyle: {
        backgroundColor: '#694fad'
      }
    });


    return (
      <Provider store={store}>

        <IndexPage />

      </Provider>
    );
  }
}
