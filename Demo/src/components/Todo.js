import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class Todo extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      text: '',
      todos: ['Learn React Native']
    };
  }

  static navigationOptions = {
    title: 'Home',
  };

  onRemove = () => {

  }

  render() {
    return (
      <View style={{padding: 10}}>
        <FlatList
          data={this.state.todos}
          renderItem={({item}) => (
            <View style={styles.todo}>
              <Text style={styles.todoTitle}>{item}</Text>
              <TouchableOpacity onPress={this.onRemove}>
                <Text style={styles.todoRemove}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TextInput
          placeholder="Type here!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Button
          title="Add"
          onPress={() => this.setState({todos: [...this.state.todos, this.state.text]})}
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
