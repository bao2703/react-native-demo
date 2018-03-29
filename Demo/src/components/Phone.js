import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import call from 'react-native-phone-call';

export default class Phone extends Component {
  static navigationOptions = {
    title: 'Phone Call',
  };

  constructor(pros) {
    super(pros);
    this.state = {
      number: '',
      list: [],
    };
  }

  _onCall = () => {
    const args = {
      number: this.state.number.toString(),
      prompt: false,
    }

    call(args).catch(console.error)
  }

  _renderItem = ({ item }) => (
    <Text>A</Text>
  );


  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          keyboardType={'phone-pad'}
          value={this.state.number}
          onChangeText={number => this.setState({ number })}
          onSubmitEditing={this._onCall}
        />
        <Button
          title="Call"
          onPress={this._onCall}
        />
        <FlatList
          data={this.state.list}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}


