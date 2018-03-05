import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: this.props.todo
    };
  }

  render() {
    return (
      <View style={styles.todo}>
        <Text style={styles.todoTitle}>{this.state.todo.key}</Text>
        <TouchableOpacity onPress={this.props.removeTodo}>
          <Text style={styles.todoRemove}>Remove</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todo: {
    padding: 10,
    flexDirection: 'row'
  },
  todoTitle: {
    fontSize: 20,
    flex: 2
  },
  todoRemove: {
    fontSize: 20,
    flex: 1,
    color: 'red'
  }
});
