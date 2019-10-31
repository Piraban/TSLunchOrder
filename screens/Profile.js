import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../utils/colors';
import store from '../store';

export default class Profile extends React.Component {


  static navigationOptions = ({
    navigation: { state: { params } },
  }) => {
    const { id } = params;
    const { name } = store

      .getState()
      .orders.find(order => order.id === id);

    return {
      title: name.split(' ')[0],
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.blue,
      },
    };
  };

  state = store.getState();

  render() {

    return (
     <Text> Profile </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});
