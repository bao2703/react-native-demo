import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Todo from './components/Todo';
import Phone from './components/Phone';

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
    Phone: {
      screen: Phone,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
