import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  gotoTodo = () => {
    this.props.navigation.navigate('Todo');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={[styles.container, styles.todoContainer]}
                          onPress={this.gotoTodo}>
          <Text style={styles.todo}>
            Todo App
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
  todo: {
    color: 'white',
    fontSize: 20
  }
});
