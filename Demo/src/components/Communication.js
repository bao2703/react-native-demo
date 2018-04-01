import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import Communications from 'react-native-communications';
import Contacts from 'react-native-contacts';
import Swipeout from 'react-native-swipeout';

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


    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {

      } else {
        this.setState({ list: contacts });
        console.log(contacts);
      }
    })
  }

  _buttonClickCall(contactsNumber) {
    Communications.phonecall(contactsNumber, true)
  }

  _buttonClickMessage(contactsNumber) {
    Communications.text(contactsNumber)
  }

  _renderItem = ({ item }) => {
    const name = item.givenName;
    const number = item.phoneNumbers[0].number;
    const swipeSettings = {
      autoClose: true,
      right: [{
        onPress: () => {
          Communications.phonecall(number, true)
        },
        text: "Call",
      }],
      left: [{
        onPress: () => {
          Communications.text(number)
        },
        text: "Message",
      }],
    }
    return (
      <Swipeout {...swipeSettings}>
        <View style={styles.contactsView}>
          <TouchableOpacity>
            <View>
              <Text style={styles.text}>{name}</Text>
              <Text>{number}</Text>
          </View>
          </TouchableOpacity>
      </View>
      </Swipeout>
    )
  };

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
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  contactsView: {
    padding: 10,
    paddingTop: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


