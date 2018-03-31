import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import Communications from 'react-native-communications';
import simpleContacts from 'react-native-simple-contacts';

export default class Communication extends Component {
  static navigationOptions = {
    title: 'Communication',
  };

  constructor(pros) {
    super(pros);

    this.state = {
      number: '',
      message: '',
      list: [],
    };

    simpleContacts.getContacts().then((contacts) => {
      this.setState({contacts: this.state.list});
    });
  }
  
  _buttonClickCall(contactsNumber) {
    Communications.phonecall(contactsNumber, true)
  }

  _buttonClickMessage(contactsNumber) {
    //make message
  }

  _renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.number}</Text>
      <Button onPress={this._buttonClickCall(item.number)} title="Call"/>
      <Button onPress={this._buttonClickMessage(item.number)} title="Message"/>
    </View>
  );

  _onCall = () => {
    if (this.state.number) {
      Communications.phonecall(this.state.number, true)
    }
  }

  _onMessage = () => {
    if (this.state.number) {
      Communications.text(this.state.number, this.state.message)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Number</Text>
          <TextInput
            keyboardType={'phone-pad'}
            value={this.state.number}
            onChangeText={number => this.setState({ number })}
            onSubmitEditing={this._onCall}
          />
          <Text>Message</Text>
          <TextInput
            value={this.state.message}
            onChangeText={message => this.setState({ message })}
            onSubmitEditing={this._onMessage}
          />
        </View>

        <View style={styles.actionContainer}>
          <View style={styles.button}>
            <Button
              title="Call"
              onPress={this._onCall}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Message"
              color="#841584"
              onPress={this._onMessage}
            />
          </View>
        </View>

        <FlatList
          data={this.state.list}
          renderItem={this._renderItem}
          keyExtractor={(_, index) => index} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    padding: 5
  }
});


