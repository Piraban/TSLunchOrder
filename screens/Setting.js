import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import colors from '../utils/colors';
import store from '../store';

export default class Setting extends React.Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    title: 'Setting',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.blue,
    },
    headerRight: (
      <MaterialIcons
        name="settings"
        size={24}
        style={{ color: 'white', marginRight: 10 }}
        onPress={() => navigate('Options')}
      />
    ),
  });

  state = {
    error: store.getState().error,
  };

  async componentDidMount() {
    
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {


    return (
      <Text> Setting </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});
