import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';


import store from '../store';

const keyExtractor = ({ phone }) => phone;

export default class Favorites extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  state = {
    error: store.getState().error,
  };

  async componentDidMount() {

  }

  componentWillUnmount() {
  }


  render() {
    

    return (
      <Text> Favorites</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
});
