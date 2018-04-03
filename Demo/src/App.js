import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Todo from './components/Todo';
import Communication from './components/Communication';
import Camera from './components/Camera';

export default class App extends Component {

  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Todo: {
      screen: Todo,
    },
    Communication: {
      screen: Communication,
    },
    Camera: {
      screen: Camera,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
