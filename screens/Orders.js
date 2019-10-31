import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Linking,
} from 'react-native';

import OrderListItem from '../components/OrderListItem';

import { fetchOrders } from '../utils/api';
import getURLParams from '../utils/getURLParams';
import store from '../store';

const keyExtractor = ({ phone }) => phone;

export default class Orders extends React.Component {
  static navigationOptions = () => ({
    title: 'Orders',
  });

  state = {
    orders: store.getState().orders,
    loading: store.getState().isFetchingOrders,
    error: store.getState().error,
  };

  async componentDidMount() {
    this.unsubscribe = store.onChange(() =>
      this.setState({
        orders: store.getState().orders,
        loading: store.getState().isFetchingOrders,
        error: store.getState().error,
      }),
    );

    const orders = await fetchOrders();

    console.log(orders)

    store.setState({ orders, isFetchingOrders: false });

    Linking.addEventListener('url', this.handleOpenUrl);

    const url = await Linking.getInitialURL();
    this.handleOpenUrl({ url });
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenUrl);
    this.unsubscribe();
  }

  handleOpenUrl(event) {
    const { navigation: { navigate } } = this.props;
    const { url } = event;
    const params = getURLParams(url);

    if (params.name) {
      const queriedOrder = store
        .getState()
        .orders.find(
          order =>
          order.name.split(' ')[0].toLowerCase() ===
            params.name.toLowerCase(),
        );

      if (queriedOrder) {
        navigate('Profile', { id: queriedOrder.id });
      }
    }
  }

  renderOrder = ({ item }) => {
    const { navigation: { navigate } } = this.props;
    const { id, name, type} = item;

    return (
      <OrderListItem
        name={name}
       
        onPress={() => navigate('Profile', { id })}
      />
    );
  };

  render() {
    const { orders, loading, error } = this.state;

    const ordersSorted = orders.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading &&
          !error && (
            <FlatList
              data={ordersSorted}
              keyExtractor={keyExtractor}
              renderItem={this.renderOrder}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});
