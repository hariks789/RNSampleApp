
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from './home';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

const Routes = {
  Screen1: {
    name: 'Screen1',
    screen: Screen1,
  },
  Screen2: {
    name: 'Screen2',
    screen: Screen2,
  },
  Screen3: {
    name: 'Screen3',
    screen: Screen3,
  },
};

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator(
  {
    ...Routes,
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
