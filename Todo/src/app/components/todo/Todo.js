import React, { Component } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'

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

  render() {
    return (
      <View>
        <FlatList
          data={this.state.todos}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
  item: {
    padding: 10,
    fontSize: 16,
    height: 50,
    backgroundColor: 'gray',
    color: 'white'
  },
});
