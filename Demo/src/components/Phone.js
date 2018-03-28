import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';
import call from 'react-native-phone-call';
import {List, ListItem} from 'react-native-elements';

export default class Phone extends Component {
  constructor(pros){
    super(pros);
    this.state = {
      number: '',
      list: [],
    };
  }
  
  static navigationOptions = {
    title: 'Home',
  };

  _onCall = () => {
    const args = {
      number: this.state.number.toString, 
      prompt: false,
    }
     
    call(args).catch(console.error)
  }

  _renderItem = ({item}) => (
    <ListItem>
      
    </ListItem>
  );

  
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
        <FlatList
          data={this.state.list}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}


