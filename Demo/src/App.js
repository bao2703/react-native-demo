import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Todo from './components/Todo';
import TodoWithWebservice from './components/TodoWithWebservice';
import Communication from './components/Communication';

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
    TodoWithWebservice: {
      screen: TodoWithWebservice,
    },
    Communication: {
      screen: Communication,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
