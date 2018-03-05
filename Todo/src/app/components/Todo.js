import React, { Component } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import TodoItem from './TodoItem'

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {key: 'Learn NodeJs'},
        {key: 'Learn React'}
      ],
      text: ''
    }
  }

  removeTodo(todo) {
    let todos = this.state.todos.slice();
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    this.setState({todos});
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.todos}
          renderItem={({item}) => <TodoItem todo={item} removeTodo={() => this.removeTodo(item)}></TodoItem>}
        />
        <TextInput
          placeholder="Type here!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          title="Add"
          onPress={() => {
            this.setState({todos: [...this.state.todos, {key: this.state.text}]});
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});
