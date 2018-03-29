import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  _gotoTodo = () => {
    this.props.navigation.navigate('Todo');
  }

  _gotoPhoneCall = () => {
    this.props.navigation.navigate('Phone');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.container, styles.todoContainer]}
          onPress={this._gotoTodo}
        >
          <Text style={styles.title}>
            Todo App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.container, styles.phoneContainer]}
          onPress={this._gotoPhoneCall}
        >
          <Text style={styles.title}>
            Phone Call
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoContainer: {
    backgroundColor: '#3F51B5',
  },
  phoneContainer: {
    backgroundColor: '#9C27B0'
  },
  title: {
    color: 'white',
    fontSize: 20
  }
});
