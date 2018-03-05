import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Todo from './components/Todo';

export default class App extends Component {
  render() {
    return (
      <View>
        <Todo></Todo>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
