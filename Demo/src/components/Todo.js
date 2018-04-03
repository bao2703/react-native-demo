import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Button, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class Todo extends Component {
  static navigationOptions = {
    title: 'Todo',
  };

  constructor(pros) {
    super(pros);
    this.state = {
      text: '',
      nextKey: 3,
      todos: [],
      fetching: false
    };
  }

  url = 'http://10.0.2.2:4000';
  headers = { 'Content-Type': 'application/json' };

  componentDidMount() {
    this.setState({ fetching: true });
    setTimeout(() => {
      fetch(this.url)
        .then(response => response.json())
        .then(todos => {
          this.setState({
            fetching: false,
            todos
          });
        })
        .catch(this._handleError);
    }, 1500);
  }

  _onAdd = () => {
    this.setState({ fetching: true });
    setTimeout(() => {
      fetch(this.url, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ text: this.state.text })
      })
        .then(response => response.json())
        .then(newTodo => {
          this.setState({
            fetching: false,
            text: '',
            todos: [...this.state.todos, newTodo],
          });
        })
        .catch(this._handleError);
    }, 1500);
  }

  _onRemove = todo => {
    this.setState({ fetching: true });
    setTimeout(() => {
      fetch(this.url, {
        method: 'DELETE',
        headers: this.headers,
        body: JSON.stringify({ key: todo.key })
      })
        .then(response => {
          const todos = this.state.todos.filter(item => item.key != todo.key);
          this.setState({
            fetching: false,
            todos
          });
        })
        .catch(this._handleError);
    }, 1500);
  }

  _handleError = error => {
    console.log(error);
    this.setState({ fetching: false });
  }

  _renderItem = ({ item }) => (
    <View style={styles.todo}>
      <Text style={styles.todoTitle}>
        {item.title}
      </Text>
      <TouchableOpacity onPress={() => this._onRemove(item)} disabled={this.state.fetching}>
        <Text style={styles.todoRemove}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { text, todos, fetching } = this.state;

    return (
      <View style={{ padding: 10 }}>
        {fetching &&
          <View>
            <ActivityIndicator size={100} />
          </View>
        }
        <FlatList
          data={todos}
          renderItem={this._renderItem}
        />
        <TextInput editable={!fetching}
          placeholder="Type here!"
          value={text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button disabled={text == '' || fetching}
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
