import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class TodoWithWebservice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false
    };
  }

  componentDidMount() {
    this.setState({ fetching: true });
    setTimeout(() => {
      fetch('https://facebook.github.io/react-native/movies.json')
        .then(response => response.json())
        .then(responseJson => {

          this.setState({
            fetching: false,
            dataSource: responseJson.movies
          });
        })
        .catch(error => this.setState({ fetching: false }));
    }, 2000);
  }

  render() {
    if (this.state.fetching) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size={100} />
        </View>
      )
    }

    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(_, index) => index}
        />
      </View>
    );
  }
}
