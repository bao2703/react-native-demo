import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';
import call from 'react-native-phone-call';


export default class Phone extends Component {
  constructor(pros){
    super(pros);
    this.state = {
      number = '',
    }
  }
  
  static navigationOptions = {
    title: 'Home',
  };

  _onCall = () => {
    
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput 
          keyboardType={'phone-pad'} 
          value = {this.state.number}
          onChangeText = {number => this.setState({number})}
          onSubmitEditing={this._onCall}
        />
        <Button
          title="Call"
          onPress={this._onCall}
        />
      </View>
    )
  }
}

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   }
// });

// const args = {
//     number: '9093900003', // Number to call
//     prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
//   }
   
//   call(args).catch(console.error)
