import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class Todo extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      text: '',
      nextKey: 3,
      todos: [
        { key: '1', title: 'Learn React Native' },
        { key: '2', title: 'Learn NodeJS' }
      ],
    };
  }

  static navigationOptions = {
    title: 'Todo',
  };

  _onAdd = () => {
    const newTodo = { key: this.state.nextKey.toString(), title: this.state.text };
    this.setState({
      todos: [...this.state.todos, newTodo],
      nextKey: this.state.nextKey + 1
    });
  }

  _onRemove = (todo) => {
    const removeIndex = this.state.todos.indexOf(todo);
    const todos = this.state.todos.filter((item, index) => index != removeIndex);
    this.setState({ todos });
  }

  _renderItem = ({ item }) => (
    <View style={styles.todo}>
      <Text style={styles.todoTitle}>
        {item.title}
      </Text>
      <TouchableOpacity onPress={() => this._onRemove(item)}>
        <Text style={styles.todoRemove}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={{ padding: 10 }}>
        <FlatList
          data={this.state.todos}
          renderItem={this._renderItem}
        />
        <TextInput
          placeholder="Type here!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Button
          title="Add"
          onPress={this._onAdd}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row'
  },
  todoTitle: {
    fontSize: 20,
    flex: 2
  },
  todoRemove: {
    fontSize: 17,
    flex: 1,
    color: 'red'
  }
});
