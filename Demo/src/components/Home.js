import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  _gotoTodo = () => {
    this.props.navigation.navigate('Todo');
  }

  _gotoTodo2 = () => {
    this.props.navigation.navigate('TodoWithWebservice');
  }

  _gotoCommunication = () => {
    this.props.navigation.navigate('Communication');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.container, styles.todoContainer]}
          onPress={this._gotoTodo}
        >
          <Text style={styles.title}>
            Todo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.container, styles.todoWithWebserviceContainer]}
          onPress={this._gotoTodo2}
        >
          <Text style={styles.title}>
            Todo (Webservice)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.container, styles.phoneContainer]}
          onPress={this._gotoCommunication}
        >
          <Text style={styles.title}>
            Communication
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
  todoWithWebserviceContainer: {
    backgroundColor: '#03A9F4',
  },
  phoneContainer: {
    backgroundColor: '#9C27B0'
  },
  title: {
    color: 'white',
    fontSize: 20
  }
});
