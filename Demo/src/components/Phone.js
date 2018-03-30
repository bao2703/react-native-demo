'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import call from 'react-native-phone-call';
import Communications from 'react-native-communications';

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

  _renderItem = ({ item }) => (
    <Text>A</Text>
  );

  _onCall = () => {
    Communications.call(this.state.number.toString(), true)
  }

  _onMessage = () => {
    Communications.text(this.state.number.toString())
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          keyboardType={'phone-pad'}
          value={this.state.number}
          onChangeText={number => this.setState({ number })}
          onSubmitEditing={this._onCall}/>

        <Button 
          title="Call"
          onPress={this._onCall}/>

        <Button 
          title="Message"
          onPress={this._onMessage}/>

        <FlatList
          data={this.state.list}
          renderItem={this._renderItem}/>

      </View>

      // <View style={styles.container}>
      //   <View style={styles.button}>
      //     <Button 
      //       title="Call"
      //       onPress={this._onCall}/>
      //   </View>

      //   <View style={styles.button}>
      //     <Button 
      //       title="Message"
      //       onPress={this._onMessage}/>
      //   </View>
      // </View> 
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  }
});


